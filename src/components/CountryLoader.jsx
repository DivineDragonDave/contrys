export const countryLoader = async ({ params }) => {
  const { id } = params;
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
    if (!res.ok) {
      throw new Error(`Could not get country with id ${id}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return { message: error.message };
  }
};
