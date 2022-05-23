const navLinks = id => {
  const prefixPath = to => `/clients/${id}/${to}`
  return [
    { label: "Profile", href: prefixPath("") },
    { label: "Connections", children: [
      { 
        label: "My Professionals",
        href: ""
      },
      { 
        label: "Subscriptions",
        href: prefixPath("cliente")
      },
    ]}, 
    { label: "Find Professionals", href: "/professionals" },
  ]
}

export {navLinks}
