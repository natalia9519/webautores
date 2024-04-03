import React from 'react'
import TableBook from '../../Components/TableBook/TableBook'
import ViewAllBooks from '../../Components/ViewAllBooks/ViewAllBooks'
import TableEvents from '../../Components/TableEvents/TableEvents'
import ViewAllEvents from '../../Components/ViewAllEvents/ViewAllEvents'

export default function AdminView() {
  return (
    <main>
      <TableBook />
      <ViewAllBooks />
      <TableEvents />
      <ViewAllEvents />
    </main>
  )
}
