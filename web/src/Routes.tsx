// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import HomePage from './pages/HomePage/HomePage'
const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Anggotas" titleTo="anggotas" buttonLabel="New Anggota" buttonTo="newAnggota">
        <Route path="/anggotas/new" page={AnggotaNewAnggotaPage} name="newAnggota" />
        <Route path="/anggotas/{id:Int}/edit" page={AnggotaEditAnggotaPage} name="editAnggota" />
        <Route path="/anggotas/{id:Int}" page={AnggotaAnggotaPage} name="anggota" />
        <Route path="/anggotas" page={AnggotaAnggotasPage} name="anggotas" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
