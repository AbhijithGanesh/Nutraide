import { Dialog, Transition } from "@headlessui/react";
import axios, { AxiosResponse } from "axios";
import React, { Fragment, useState } from "react";
import { BsDropletFill } from "react-icons/bs";
import { CiBurger, CiLink } from "react-icons/ci";
import { GiMuscleUp, GiPill } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";

interface FormData {
  patient_age: string;
  patient_gender: "male" | "female";
  height: string;
  weight: string;
  hb: string;
  urea: string;
  cr: string;
  na: string;
  potassium: string;
  fbs: string;
  hba1c: string;
  sgot: string;
  sgpt: string;
}

interface ResponseData {
  cal: number;
  cho: number;
  fat: number;
  fluids: number;
  pro: number;
  sodium: number;
}

const apiUrl: string =
  "https://us-central1-augmented-axe-380213.cloudfunctions.net/nutriai";

interface DialogueItemProps {
  icon: JSX.Element;
  title: string;
  value: number;
}

const DialogueItem = (props: DialogueItemProps): JSX.Element => {
  return (
    <section className="py-2 flex items-center justify-between text-lg text-gray-800 font-semibold">
      {props.icon}
      <section>{props.title}</section>
      <section className="text-gray-500">{props.value}</section>
    </section>
  );
};

const PatientDetailForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    patient_age: "0",
    patient_gender: "male",
    height: "0",
    weight: "0",
    hb: "0",
    urea: "0",
    cr: "0",
    na: "0",
    potassium: "0",
    fbs: "0",
    hba1c: "0",
    sgot: "0",
    sgpt: "0",
  });

  const [responseData, setResponseData] = useState<ResponseData>({
    cal: 0,
    cho: 0,
    fat: 0,
    pro: 0,
    fluids: 0,
    sodium: 0,
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const submitForm = async (formData: FormData) => {
    try {
      const response: AxiosResponse<ResponseData> = await axios.post(
        apiUrl,
        formData
      );
      setResponseData(response.data);
      setLoaded(true);
    } catch (error: any) {
      alert(error);
      console.error(error?.message);
    }
  };

  return (
    <section className="p-4 bg-gray-900 min-h-screen w-full flex items-center justify-center">
      <form
        className="bg-gray-700 rounded-lg p-8 lg:w-1/2 md:w-3/4 sm:w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-black mb-6 text-white">
          Patient Information
        </h1>
        <section className="mb-4">
          <label
            htmlFor="patient_age"
            className="block text-white font-semibold mb-2"
          >
            Age
          </label>
          <input
            id="patient_age"
            name="patient_age"
            className="form-select block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.patient_age}
          ></input>
        </section>
        <section className="mb-4">
          <label
            htmlFor="patient_gender"
            className="block text-white font-semibold mb-2"
          >
            Gender
          </label>
          <input
            id="patient_gender"
            name="patient_gender"
            className="form-select block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.patient_gender}
          ></input>
        </section>
        <section className="mb-4">
          <label
            htmlFor="height"
            className="block text-white font-semibold mb-2"
          >
            Height (cm)
          </label>
          <input
            type="string"
            id="height"
            name="height"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.height}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="weight"
            className="block text-white font-semibold mb-2"
          >
            Weight (kg)
          </label>
          <input
            type="string"
            id="weight"
            name="weight"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.weight}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="haemoglobin"
            className="block text-white font-semibold mb-2"
          >
            Haemoglobin (g/dL)
          </label>
          <input
            type="string"
            id="haemoglobin"
            name="hb"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.hb}
          />
        </section>
        <section className="mb-4">
          <label htmlFor="urea" className="block text-white font-semibold mb-2">
            Urea (mg/dL)
          </label>
          <input
            type="string"
            id="urea"
            name="urea"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.urea}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="creatinine"
            className="block text-white font-semibold mb-2"
          >
            Creatinine (mg/dL)
          </label>
          <input
            type="string"
            id="creatinine"
            name="cr"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.cr}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="sodium"
            className="block text-white font-semibold mb-2"
          >
            Sodium (mEq/L)
          </label>
          <input
            type="string"
            id="sodium"
            name="na"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.na}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="potassium"
            className="block text-white font-semibold mb-2"
          >
            Potassium (mEq/L)
          </label>
          <input
            type="string"
            id="potassium"
            name="potassium"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.potassium}
          />
        </section>
        <section className="mb-4">
          <label htmlFor="fbs" className="block text-white font-semibold mb-2">
            Fasting Blood Sugar (mg/dL)
          </label>
          <input
            type="string"
            id="fbs"
            name="fbs"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.fbs}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="hba1c"
            className="block text-white font-semibold mb-2"
          >
            HbA1c (%)
          </label>
          <input
            type="string"
            id="hba1c"
            name="hba1c"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.hba1c}
          />
        </section>
        <section className="mb-4">
          <label htmlFor="sgot" className="block text-white font-semibold mb-2">
            SGOT (U/L)
          </label>
        </section>
        <input
          type="string"
          id="sgot"
          name="sgot"
          className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          onChange={handleChange}
          value={formData.sgot}
        />
        <section className="mb-4">
          <label
            htmlFor="sgpt"
            className="block text-white font-semibold mb-2 py-2"
          >
            SGPT (U/L)
          </label>
          <input
            type="string"
            id="sgpt"
            name="sgpt"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.sgpt}
          />
        </section>
        <section className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 w-full p-12 hover:translate-y-1 rounded-lg text-white font-semibold hover:bg-sky-950 focus:bg-gray-800 focus:outline-none"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              submitForm(formData);
              event.preventDefault();
            }}
          >
            Submit
          </button>
        </section>
        <section className="flex items-center justify-center py-2">
          <button
            type="button"
            onClick={openModal}
            className="px-6 py-2 bg-[#E5E7EB] w-full p-12 hover:translate-y-1 rounded-lg text-black font-semibold hover:bg-slate-300 focus:bg-gray-800 focus:outline-none"
          >
            {
            loaded ? "Open Results💡" : "I am Empty 🤷‍♂️"
            }
          </button>
        </section>
      </form>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="section" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <section className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <section className="fixed inset-0 overflow-y-auto">
            <section className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-black leading-6 text-gray-900"
                  >
                    Health recommendations
                  </Dialog.Title>
                  <section className="mt-4">
                    <section className="flex flex-col">
                      <DialogueItem
                        icon={<SlEnergy className="text-3xl" />}
                        title="Calories"
                        value={responseData.cal}
                      />
                      <DialogueItem
                        icon={<CiLink className="text-3xl" />}
                        title="Cholestrol"
                        value={responseData.cho}
                      />
                      <DialogueItem
                        icon={<CiBurger className="text-3xl" />}
                        title="Fat"
                        value={responseData.fat}
                      />
                      <DialogueItem
                        icon={<BsDropletFill className="text-3xl" />}
                        title="Fluids"
                        value={responseData.fluids}
                      />
                      <DialogueItem
                        icon={<GiMuscleUp className="text-3xl" />}
                        title="Protein"
                        value={responseData.pro}
                      />

                      <DialogueItem
                        icon={<GiPill className="text-3xl" />}
                        title="Salt (Sodium) "
                        value={responseData.fluids}
                      />
                    </section>
                    <section className="mt-4">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-400 px-4 py-2 text-md font-normal text-white  hover:bg-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        I shall follow this! Thank you 💡
                      </button>
                    </section>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </section>
          </section>
        </Dialog>
      </Transition>
    </section>
  );
};

export default PatientDetailForm;
