// API

GET /calendar/<month>
Header `user-id`

{
'1/1/20': [
{
start: '10:00 am',
end: '11:00 am',
meta: {
attendees: [1, 2]
}
},
{
start: '10:00 am',
end: '11:00 am',
},
{
start: '10:00 am',
end: '11:00 am',
},
{
start: '10:00 am',
end: '11:00 am',
},
//...
],
'12/1/20': [
{
start: '10:00 am',
end: '11:00 am',
},
//...
]
}

// date range = [1/1/20, 2/1/20, ...]

POST /calendar/events

{
start: timestamp,
end: timestamp,
attendees: [user-id-1, user-id-2, ...],
organiser: user-id-9
}

GET /calendar/users

{
1: {
id: 1,
name: 'Rohan'
},
...
}

1. Calendar [`/calendar/<month>`, `/calendar/users`]

   - MonthView
   - WeekView
   - DayView

     1.1. Day - Event
     /_
     {
     start: '10:00 am',
     end: '11:00 am',
     meta: ''
     }
     _/
     1.2. Button
     1.3. Invite Form
     /_
     {
     start: timestamp,
     end: timestamp,
     attendees: [user-id-1, user-id-2, ...],
     organiser: user-id-9
     }
     _/
