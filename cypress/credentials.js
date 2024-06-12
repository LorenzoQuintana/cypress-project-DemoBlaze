class Credentials {
  static validUser = {
    username: "newuser",
    password: "password123"
  };

  static invalidUser = {
    username: "neuser",
    password: "password13"
  };

  static adminUser = {
    username: "admin",
    password: "admin"
  };

  static purchaseDetails = {
    user: "Test User",
    country: "Test Country",
    city: "Test City",
    card: "1234567890123456",
    month: "1",
    year: "2024",
    sampleCost: 720
  };
}

module.exports = Credentials;