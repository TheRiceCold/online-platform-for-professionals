function userNavLinks(id, modals) {
  const prefixPath = to => `/professionals/${id}/${to}`

  return [
    { label: "Profile", href: prefixPath("") }, 
    { label: "Clients", children: [
      { 
        label: "Clientele",
        href: prefixPath("cliente")
      },
      { 
        label: "Subscribers",
        href: ""
      },
    ]}, 
    { label: "Professionals", href: "/professionals" }, 
    { label: "Portfolio", href: prefixPath("portfolio") },
    { label: "Services", href: prefixPath("services") }, 
    { label: "Bookings", href: prefixPath("bookings") }, 
  ]
}

export {userNavLinks}
