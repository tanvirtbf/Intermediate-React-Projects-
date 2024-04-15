import { useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    serviceType: "",
    customerId: "",
    details: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name:"",
      address:"",
      serviceType:"",
      customerId:"",
      details:"",
      phone:"",
    })
  };
  return (
    <div className="form-main">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-div">
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="আপনার বা প্রতিষ্ঠানের নাম *"
            value={data.name}
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
          />
        </div>

        <div className="form-div">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="আপনার বা প্রতিষ্ঠানের ঠিকানা *"
            value={data.address}
            onChange={(e) =>
              setData({
                ...data,
                address: e.target.value,
              })
            }
          />
        </div>
        <div className="form-div">
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="ফোন নাম্বার *"
            value={data.phone}
            onChange={(e) =>
              setData({
                ...data,
                phone: e.target.value,
              })
            }
          />
        </div>

        <div className="form-div">
          <input
            type="text"
            rows="4"
            className="form-control"
            id="body"
            placeholder="কাস্টমার আইডি (যদি মেশিনের গায়ে দেয়া থাকে) "
            value={data.customerId}
            onChange={(e) =>
              setData({
                ...data,
                customerId: e.target.value,
              })
            }
          />
        </div>
        <div className="form-div">
          <label htmlFor="reactions" className="form-label">
            আপনার কাঙ্ক্ষিত সার্ভিস সিলেক্ট করুন।
          </label>
          <select
            className="form-control"
            value={data.serviceType}
            id="reactions"
            placeholder="Please Select your service"
            onChange={(e) =>
              setData({
                ...data,
                serviceType: e.target.value,
              })
            }
          >
            <option value="">--Please choose an option--</option>
            <option value="Servicing">Servicing</option>
            <option value="Want to buy water purifier">
              Want to buy water purifier
            </option>
            <option value="Installation">Installation</option>
            <option value="Re-installation">Re-installation</option>
            <option value="Filter Change">Filter Change</option>
            <option value="Installation">Installation</option>
          </select>
        </div>
        <div className="form-div">
          <textarea
            type="text"
            rows="2"
            className="form-control"
            id="body"
            placeholder="বিস্তারিত লিখুনঃ"
            value={data.details}
            onChange={(e) =>
              setData({
                ...data,
                details: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <CiBookmarkCheck className="icon" />
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Form;
