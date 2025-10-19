"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon, Clock } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface DateTimePickerProps {
  date?: Date
  setDate: (date: Date | undefined) => void
  disabled?: boolean
  placeholder?: string
}

export function DateTimePicker({
  date,
  setDate,
  disabled,
  placeholder = "Select date and time",
}: DateTimePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedTime, setSelectedTime] = React.useState<string>(
    date ? format(date, "HH:mm") : "18:00"
  )

  // Generate time slots from 6 PM to 9 PM in 15-minute intervals
  const timeSlots = React.useMemo(() => {
    const slots = []
    for (let hour = 18; hour <= 21; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        if (hour === 21 && minute > 0) break // Stop at 9:00 PM
        const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
        slots.push(timeString)
      }
    }
    return slots
  }, [])

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const [hours, minutes] = selectedTime.split(":").map(Number)
      selectedDate.setHours(hours, minutes, 0, 0)
      setDate(selectedDate)
    }
  }

  const handleTimeChange = (time: string) => {
    setSelectedTime(time)
    if (date) {
      const [hours, minutes] = time.split(":").map(Number)
      const newDate = new Date(date)
      newDate.setHours(hours, minutes, 0, 0)
      setDate(newDate)
    }
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP 'at' p") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex flex-col md:flex-row">
          <div className="p-3">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              disabled={(date) => {
                const day = date.getDay()
                // Disable Sundays (0) and dates in the past
                return day === 0 || date < new Date(new Date().setHours(0, 0, 0, 0))
              }}
            />
          </div>
          <div className="border-t md:border-t-0 md:border-l p-3 w-full md:w-48">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Select Time</span>
            </div>
            <div className="space-y-1 max-h-[240px] overflow-y-auto">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeChange(time)}
                  className={cn(
                    "w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors",
                    selectedTime === time && "bg-primary text-primary-foreground hover:bg-primary"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

