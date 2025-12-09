export const login = async (email, password) => {
  try {
    const response = await fetch("http://192.168.1.58/ServiceU/api/login.php", {
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

