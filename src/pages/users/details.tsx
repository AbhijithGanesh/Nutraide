import { useState } from "react";
import clsx from "clsx";

interface FormData {
  age: number | null;
  height: number | null;
  weight: number | null;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    age: null,
    height: null,
    weight: null,
  });

  const handleinputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormData
  ) => {
    const value =
      event.target.value.trim() === "" ? null : Number(event.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4">
        <label htmlFor="age" className="mb-2 text-gray-700">
          Age (years)
        </label>
        <input
          id="age"
          type="number"
          min="0"
          max="150"
          className={clsx(
            "block w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            formData.age === null
              ? "text-gray-400 placeholder-gray-400"
              : "text-gray-900"
          )}
          placeholder="Enter your age"
          value={formData.age === null ? "" : formData.age}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleinputChange(event, "age")
          }
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="height" className="mb-2 text-gray-700">
          Height (cm)
        </label>
        <input
          id="height"
          type="number"
          min="0"
          max="300"
          className={clsx(
            "block w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            formData.height === null
              ? "text-gray-400 placeholder-gray-400"
              : "text-gray-900"
          )}
          placeholder="Enter your height"
          value={formData.height === null ? "" : formData.height}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleinputChange(event, "height")
          }
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="weight" className="mb-2 text-gray-700">
          Weight (kg)
        </label>
        <input
          id="weight"
          type="number"
          min="0"
          max="500"
          className={clsx(
            "block w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            formData.weight === null
              ? "text-gray-400 placeholder-gray-400"
              : "text-gray-900"
          )}
          placeholder="Enter your weight"
          value={formData.weight === null ? "" : formData.weight}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleinputChange(event, "weight")
          }
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover        :bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}
