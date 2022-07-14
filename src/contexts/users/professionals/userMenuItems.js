const userMenuItems = (modals, logout) => {
  const {
    openAccountSettings,
    openCalendlyToken,
    openFieldSettings,
  } = modals

  return [
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
