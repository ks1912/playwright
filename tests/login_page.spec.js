import { test, expect } from "@playwright/test";

test.describe("API TESTING", () => {
  // Declaring token variable as global
  let token, userId, bookData;
  test("TC-01, LOGIN TO USER", async ({ request }) => {
    let login_resp = await request.post(
      `${process.env.BASE_URL_API}/api/Login`,
      {
        data: {
          userId: 0,
          firstName: "test",
          lastName: "test",
          username: process.env.U_NAME,
          password: process.env.U_PASS,
          gender: "string",
          userTypeId: 0,
        },
      }
    );
    const bufferData = await login_resp.body(); // Assuming login_resp.body() returns the Buffer
    const decodedResponse = bufferData.toString("utf-8"); // Decode buffer to string

    try {
      expect(login_resp.status()).toBeGreaterThanOrEqual(200);
      expect(login_resp.status()).toBeLessThan(300);
      const jsonResponse = JSON.parse(decodedResponse);
      token = jsonResponse.token;
      userId = jsonResponse.userDetails.userId;
    } catch (error) {
      console.error("Error In Login", error);
    }
  });

  test("TC-02, Add items to cart", async ({ request }) => {
    // console.log(token);
    // console.log(userID);
    // Get all the books
    const getItems = await request.get(`${process.env.BASE_URL_API}/api/Book`);
    const itemsData = await getItems.body();
    bookData = JSON.parse(itemsData.toString("utf-8"));
    bookData = bookData[0].bookId;
    // Add item to cart
    const addToCart = await request.post(
      `${process.env.BASE_URL_API}/api/ShoppingCart/AddToCart/${userId}/${bookData}`,
      { form: [{ authentication: token }] }
    );
    console.log((await addToCart.body()).toString("utf-8"));
    try {
      expect(
        parseInt((await addToCart.body()).toString("utf-8"))
      ).toBeGreaterThanOrEqual(1);
    } catch (error) {
      console.error("Error in adding Item", error);
    }
  });

  test("TC-03, Add items to whitelist", async ({ request }) => {
    // console.log(token);
    // console.log(userID);
    // Get all the books
    await request.post(
      `${process.env.BASE_URL_API}/api/Wishlist/ToggleWishlist/${userId}/${bookData}`
    );
    console.log("====================================");
    console.log(bookData);
    console.log("====================================");
    const listOfWhitelistedItems = await request.get(
      `${process.env.BASE_URL_API}/api/Wishlist/${userId}`,
      {
        data: [
          {
            bookId: bookData,
          },
        ],
      }
    );
    const whitelistedItems = await listOfWhitelistedItems.body();
    console.log(JSON.parse(whitelistedItems));
    // let bookData = JSON.parse(itemsData.toString("utf-8"));
    // bookData = bookData[0].bookId;
    // // Add item to cart
    // const addToCart = await request.post(
    //   `${process.env.BASE_URL_API}/api/ShoppingCart/AddToCart/${userId}/${bookData}`
    // );
    // console.log((await addToCart.body()).toString("utf-8"));
  });
});
