export const login = async (email, password) => {
  try {
    const response = await fetch("http://10.0.2.2/ServiceU/api/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Connection error");
  }
};

