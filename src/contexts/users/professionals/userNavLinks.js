function userNavLinks(id, modals) {
  const prefixPath = to => `/professionals/${id}/${to}`
  
  const {clienteleModal, subscribersModal} = modals

  return [
    { label: "Profile", href: prefixPath("") }, 
    { label: "Clients", children: [
      { 
        label: "Clientele",
        onClick: clienteleModal.onOpen,
      },
      { 
        label: "Subscribers",
        onClick: subscribersModal.onOpen
      },
    ]}, 
    { label: "Professionals", href: "/professionals" }, 
    { label: "Portfolio", href: prefixPath("portfolio") },
    { label: "Services", href: prefixPath("services") }, 
    { label: "Bookings", href: prefixPath("bookings") }, 
  ]
}

export {userNavLinks}
