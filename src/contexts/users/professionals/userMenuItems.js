const userMenuItems = (user, router, logout, modals) => {
  const {
    openAccountSettings,
    openCalendlyToken,
    openFieldSettings,
  } = modals

  return [
    {
      label: "Profile", 
      handleOnClick: () => 
        router.push(`/professionals/${user.professionalId}`)
    },
    {
      label: "Subscribers", 
      handleOnClick: () => 
        router.push(`/professionals/${user.professionalId}/connections`)
    },
    {
      label: "Field Settings",
      handleOnClick: openFieldSettings
    },
    {
      label: "Calendly Token",
      handleOnClick: openCalendlyToken
    },
    {
      label: "Account Settings",
      handleOnClick: openAccountSettings
    },
    "divider",
    {
      label: "Sign out",
      handleOnClick: logout
    }
  ]
}

export {userMenuItems}
