"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  const [dateError, setDateError] = React.useState<string>("")
  
  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0]
  
  // Convert Date to input values
  const dateValue = date ? date.toISOString().split('T')[0] : ''
  const timeValue = date ? date.toTimeString().slice(0, 5) : '18:00'

  // Generate time slots from 6 PM to 9 PM in 15-minute intervals
  const timeSlots = React.useMemo(() => {
    const slots = []
    for (let hour = 18; hour <= 21; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        if (hour === 21 && minute > 0) break // Stop at 9:00 PM
        const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
        
        // Format for display (12-hour format)
        const displayHour = hour > 12 ? hour - 12 : hour
        const period = hour >= 12 ? 'PM' : 'AM'
        const displayString = `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`
        
        slots.push({ value: timeString, label: displayString })
      }
    }
    return slots
  }, [])

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateStr = e.target.value
    setDateError("")
    
    if (!newDateStr) {
      setDate(undefined)
      return
    }

    const [year, month, day] = newDateStr.split('-').map(Number)
    const newDate = new Date(year, month - 1, day)
    
    // Check if it's Sunday (0)
    if (newDate.getDay() === 0) {
      setDateError('Sundays are not available. Please select another day.')
      e.target.value = '' // Clear the input
      return
    }

    // Set time from current timeValue or default 18:00
    const [hours, minutes] = timeValue.split(':').map(Number)
    newDate.setHours(hours, minutes, 0, 0)
    setDate(newDate)
  }

  const handleTimeChange = (newTimeStr: string) => {
    const [hours, minutes] = newTimeStr.split(':').map(Number)

    if (date) {
      const newDate = new Date(date)
      newDate.setHours(hours, minutes, 0, 0)
      setDate(newDate)
    } else {
      // If no date selected, create one with today's date
      const newDate = new Date()
      newDate.setHours(hours, minutes, 0, 0)
      setDate(newDate)
    }
  }

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="appointment-date">Date</Label>
        <Input
          id="appointment-date"
          type="date"
          value={dateValue}
          onChange={handleDateChange}
          min={today}
          disabled={disabled}
          className={cn(
            "w-full",
            !dateValue && "text-muted-foreground",
            dateError && "border-red-500 focus-visible:ring-red-500"
          )}
          required
        />
        {dateError && (
          <p className="text-sm text-red-500 mt-1">{dateError}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="appointment-time">Time (6:00 PM - 9:00 PM)</Label>
        <Select
          value={timeValue}
          onValueChange={handleTimeChange}
          disabled={disabled}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((slot) => (
              <SelectItem key={slot.value} value={slot.value}>
                {slot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

