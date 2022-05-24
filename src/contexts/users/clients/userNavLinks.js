const userNavLinks = (id, modal)=> {

  const prefixPath = to => `/clients/${id}/${to}`
  return [
    { label: "Profile", href: prefixPath("") },
    { label: "Connections", children: [
      { 
        label: "My Professionals",
        onClick: modal.myProfessionals.onOpen
      },
      { 
        label: "Subscriptions",
        onClick: modal.subscriptions.onOpen
      },
    ]}, 
    { label: "Find Professionals", href: "/professionals" },
  ]
}

export {userNavLinks}
