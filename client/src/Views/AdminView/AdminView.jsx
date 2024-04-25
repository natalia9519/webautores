import React from 'react'
import TableBook from '../../Components/TableBook/TableBook.jsx'
import ViewAllBooks from '../../Components/ViewAllBooks/ViewAllBooks.jsx'
import TableEvents from '../../Components/TableEvents/TableEvents.jsx'
import ViewAllEvents from '../../Components/ViewAllEvents/ViewAllEvents.jsx'
import ViewAllComments from '../../Components/ViewAllComments/ViewAllComments.jsx'

export default function AdminView() {
  return (

    <main>
      <TableBook />
      <ViewAllBooks />
      <TableEvents />
      <ViewAllEvents />
<ViewAllComments />
    </main>
  )
}
