//react imports
import { useEffect, useRef } from "react";

//RRD imports
import { Form, useFetcher } from "react-router-dom";

// Library imports
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";


const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";

    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => { 
        if (isSubmitting) {
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmitting])

  return (
      <div className="form-wrapper">
          <h2 className="h3">
              Create a budget
          </h2>
          <fetcher.Form
              method="post"
              className="grid-sm"
                ref={formRef}
          >
              <div className="grid-xs">
                  <label htmlFor="newBudget">Budget Name</label>
              </div>
              <input
                  type="text"
                  name="newBudget"
                  id="newBudget"
                  placeholder="e.g, Groceries"
                  required
                  ref={focusRef}
              />
              <div className="grid-xs">
                  <label htmlFor="newbudgetAmount">Amount</label>
                  <input
                      type="number"
                      step={0.01}
                      name="newbudgetAmount"
                      id="newbudgetAmount"
                      placeholder="e.g, 350.00"
                      required
                      inputMode="decimal"
                  />
              </div>
              <input type="hidden" name="_action" value="createBudget" />
              <button className="btn btn--dark" disabled={isSubmitting}>
                  {
                      isSubmitting ? <span>Submitting...</span> :
                          (
                              <>
                                  <span>Create Budget</span>
                                  <CurrencyDollarIcon width={20} />
                              </>
                          )
                  }
              </button>
          </fetcher.Form>
      </div>
  )
}

export default AddBudgetForm
