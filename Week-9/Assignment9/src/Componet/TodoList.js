import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/outline';
const TodoList = () => {

    const [getVal, setGetVal] = useState('');
    const [valArr, setValArr] = useState([]);
    const [editTask, setEditTask] = useState('');
    const [dogalVal, setDogalVal] = useState('');
    const [valInx, setValInx] = useState(null);
    const [open, setOpen] = useState(false);

    const unique_id = uuid();

    const cancelButtonRef = useRef(null);

    const onHandleAddToDo = () => {
        if (getVal !== '') {
            setValArr([...valArr, { id: unique_id, task: getVal, isCompleted: false }]);
            setGetVal('');
        }
    }

    const onHandleDeleteToDo = (id) => {
        setValArr(valArr.filter((e) => (e.id !== id)));
    };

    const onHandleEditToDo = (index, params, editValue) => {
        setOpen(false);
        const newArr = valArr?.map((item, i) => {
            if (index === i) {
                return params === "task" ? { ...item, task: editValue } : { ...item, isCompleted: editValue }
            } else {
                return item;
            }
        });
        setValArr(newArr);
        setEditTask('');
    }

    const openModel = (i, params) => {
        setOpen(true);
        setDogalVal(params);
        setEditTask(params);
        setValInx(i)
    }

    return (

        <div className="h-screen w-full bg-slate-100">
            <div className="container mx-auto">

                <div className="flex justify-center pt-10">
                    <input className="h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Add your todo item" onChange={e => setGetVal(e.target.value)} defaultValue={getVal} />
                    <button className="ml-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => onHandleAddToDo()} >
                        Add task
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {valArr?.map((item, i) => {
                        return (
                            <div key={i} className='my-2' >
                                <div className={`rounded-lg shadow-lg bg-white max-w-sm`}>
                                    <div className="p-6">
                                        <h5 className={`${item.isCompleted && 'line-through'} text-gray-900 text-xl font-medium mb-3`}>{item.task}</h5>
                                        {item.isCompleted ? <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => onHandleEditToDo(i, "isCompleted", false)} >Undone</button> : <button className="animate-bounce text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => onHandleEditToDo(i, "isCompleted", true)} >Done</button>}
                                        <button className='mx-1 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => openModel(i, item.task)}>Edit</button>
                                        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => onHandleDeleteToDo(item.id)} >Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                        <div className="bg-slate-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                        Update todo
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <lable>Task</lable>
                                                        <input type="text" className="form-control
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-gray-100 bg-clip-padding
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={e => setEditTask(e.target.value)} defaultValue={dogalVal} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                                type="button"
                                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2"
                                                onClick={() => onHandleEditToDo(valInx, "task", editTask)}
                                            >
                                                EditTask
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setOpen(false)} ref={cancelButtonRef} >
                                                Cancel
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

            </div>
        </div>
    );
}

export default TodoList;
