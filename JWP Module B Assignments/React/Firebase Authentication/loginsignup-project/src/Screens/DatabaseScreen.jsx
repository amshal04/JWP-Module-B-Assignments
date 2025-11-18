import React from "react";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";

const DatabaseScreen = () => {
  const saveData = async () => {
    try {
      let userObj = {
        name: "faraz",
        age: 25,
        email: "faraz@gmail.com",
      };

      //   auto generate ID

      //   const saveData = await addDoc(collection(db, "users"), userObj);

      const id = Math.round(Math.random() * 10);

      const saveData = await setDoc(doc(db, "users", id.toString()), userObj);

      console.log("save data successfully..", saveData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>DatabaseScreen</h1>

      <button onClick={saveData}>Add Data</button>
    </div>
  );
};

export default DatabaseScreen;

// addDoc
// 🔵 1. addDoc() – Create New Document in a Collection
// ✅ What it does:
// Adds a new document to a collection.

// Firestore will automatically generate a unique document ID for you.

// 🔧 Syntax:

// addDoc(collectionReference, dataObject)
// 📌 Example:

// import { addDoc, collection } from "firebase/firestore";
// import { db } from "./Firebase"; // assume Firebase is initialized

// const addUser = async () => {
//   await addDoc(collection(db, "users"), {
//     name: "Amshal",
//     age: 25,
//     email: "amshal@example.com"
//   });
// };
// 📦 Behind the scenes:

// Collection: users/
//   └── auto-generated-id (e.g. 3fjk8G4jK)
//         └── name: "Amshal"
//         └── age: 25
//         └── email: "amshal@example.com"





// getDoc
// 🔵 2. getDoc() – Read One Specific Document
// ✅ What it does:
// Fetches the data of a single document (using its ID).

// Useful when you want to get details of one user or item.

// 🔧 Syntax:

// getDoc(documentReference)
// 📌 Example:

// import { getDoc, doc } from "firebase/firestore";

// const getUser = async () => {
//   const docRef = doc(db, "users", "DOCUMENT_ID");
//   const snapshot = await getDoc(docRef);

//   if (snapshot.exists()) {
//     console.log(snapshot.data());
//   } else {
//     console.log("No such document found.");
//   }
// };
// 📦 Behind the scenes:
// You are saying:

// “Get the document from users/3fjk8G4jK and give me its data.”



// getDocs
// 🔵 3. getDocs() – Read All Documents in a Collection
// ✅ What it does:
// Fetches all documents from a specific collection.

// Returns a query snapshot with all documents.

// 🔧 Syntax:

// getDocs(collectionReference)
// 📌 Example:

// import { getDocs, collection } from "firebase/firestore";

// const getAllUsers = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   });
// };
// 📦 Behind the scenes:
// You are asking Firestore:

// “Give me all users in the users collection.”

// It returns something like:


// - users/
//   ├── 3fjk8G4jK → { name: "Amshal", age: 25 }
//   ├── 7ujYpl9LP → { name: "Sarah", age: 23 }





// updateDoc
// 🔵 4. updateDoc() – Update Specific Fields in a Document
// ✅ What it does:
// Updates one or more fields in an existing document.

// It does not replace the entire document — only modifies specified fields.

// 🔧 Syntax:

// updateDoc(documentReference, updateDataObject)
// 📌 Example:

// import { updateDoc, doc } from "firebase/firestore";

// const updateUser = async () => {
//   const docRef = doc(db, "users", "DOCUMENT_ID");
//   await updateDoc(docRef, {
//     age: 26,
//     name: "Amshal Tariq"
//   });
// };
// 💡 Use Case:
// Updating a user's profile info without affecting their email or ID.





// deleteDoc
// 🔵 5. deleteDoc() – Delete a Document
// ✅ What it does:
// Permanently removes a document from the collection.

// Cannot be undone unless you have a backup.

// 🔧 Syntax:

// deleteDoc(documentReference)
// 📌 Example:

// import { deleteDoc, doc } from "firebase/firestore";

// const deleteUser = async () => {
//   const docRef = doc(db, "users", "DOCUMENT_ID");
//   await deleteDoc(docRef);
//   console.log("User deleted.");
// };
// ⚠️ Note:
// This deletes the entire document (not just a field). If you only want to clear a field, use updateDoc() with null or deleteField().










// 🧠 Quick Recap (In Real-World Terms)
// | Function    | Purpose                          | Real-world example                         |
// | ----------- | -------------------------------- | ------------------------------------------ |
// | `addDoc`    | Add a new user/product/message   | Sign up form, adding chat messages         |
// | `getDoc`    | View one user’s profile          | Profile page                               |
// | `getDocs`   | Display all users/products/posts | Admin dashboard, product list              |
// | `updateDoc` | Update profile or order status   | User edits name, admin marks order shipped |
// | `deleteDoc` | Remove user or message           | Deleting account, deleting a comment       |
