// RRD Import
import { redirect } from "react-router-dom";

// delete item from local storage
import { deleteItem } from "../helpers";

// Library Import
import { toast } from "react-toastify";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: "userName"
    })
    deleteItem({
        key: "budgets"
    })
    deleteItem({
        key: "expenses"
    })
    toast.success("You've deleted your account") //use "Promise" when retrieving data from API
    
    // return a redirect
    return redirect('/');
 }
