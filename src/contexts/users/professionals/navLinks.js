const navLinks = id => {
  const prefixPath = to => `/professionals/${id}/${to}`
  return [
    { label: "Profile", href: prefixPath("") }, 
    { label: "Clients", children: [
      { 
        label: "Clientele",
        subLabel: "service clients",
        href: prefixPath("cliente")
      },
      { 
        label: "Subscribers",
        subLabel: "clients who follows you",
        href: ""
      },
    ]}, 
    { label: "Professionals", href: "/professionals" }, 
    { label: "Portfolio", href: prefixPath("portfolio") },
    { label: "Services", href: prefixPath("services") }, 
    { label: "Bookings", href: prefixPath("bookings") }, 
  ]
}

export {navLinks}
