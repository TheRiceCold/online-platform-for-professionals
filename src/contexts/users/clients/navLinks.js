const navLinks = id => {
  const prefixPath = to => `/clients/${id}/${to}`
  return [
    { label: "Profile", href: prefixPath("") },
    { label: "Professionals", href: "/professionals" },
  ]
}

export {navLinks}
