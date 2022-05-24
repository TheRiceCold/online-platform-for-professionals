function userNavLinks(id, modal) {
  const prefixPath = to => `/professionals/${id}/${to}`

  return [
    { label: "Profile", href: prefixPath("") }, 
    { label: "Clients", children: [
      { 
        label: "Clientele",
        onClick: modal.clientele.onOpen,
      },
      { 
        label: "Subscribers",
        onClick: modal.subscribers.onOpen
      },
    ]}, 
    { label: "Professionals", href: "/professionals" }, 
    { label: "Portfolio", href: prefixPath("portfolio") },
    { label: "Services", href: prefixPath("services") }, 
    { label: "Bookings", href: prefixPath("bookings") }, 
  ]
}

export {userNavLinks}
