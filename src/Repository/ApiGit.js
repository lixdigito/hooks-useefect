import axios from "axios";

export async function GetUserGit(name) {
  try {
    const response = await axios.get(`https://api.github.com/users/${name}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}