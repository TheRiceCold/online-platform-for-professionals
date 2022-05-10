const login = (req, res) => {
  res.status(200)
    .setHeader("Token", "abcd1234")
    .json({
    data: {
      id: "2",
      type: "personalDetails",
      attributes: {
        email: "test@email.com",
        firstName: "John",
        lastName: "Lloyd", 
        contactNumber: "9151234567",
        city: "Manila",
        region: "NCR",
        role: "professional"
      },
      relationships: { 
        professional: {
          data: { id: "1", type: "professional" }
        }
      }
    },
  included: [
    {
      id: "1", 
      type: "professional",
      attributes: {
        field: "Programmer",
        licenseNumber: "0012345",
        officeAddress: null,
        headline: null
      },
      relationships: { 
        user: {
          data: { id: "2", type: "personalDetails" }
          },
          workPortfolios: {
            data: [
              { id: "1", type: "workPortfolio" }
            ]
          },
          services: {
            data: [ { id: "1", type: "service" } ]
          },
          reviews: {
            data: [
              { id: "1", type: "review" },
              { id: "2", type: "review" },
              { id: "3", type: "review" }
            ]
          }
        }
      }
    ]
  })
}

export default login
