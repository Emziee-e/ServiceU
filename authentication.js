export const login = async (customer_email, customer_password) => {
  try {
    const response = await fetch("http://192.168.1.58/ServiceU/api/customer_login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer_email, customer_password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Cannot connect to server" };
  }
};
