import DropDownInput from './DropDownInput';
import Input from './Input';
import React from 'react'
import uerow from '../uerow';
import UeRow from './UeRow';

export default function UniversityExam() {
    return (
        <div className="bg-background flex flex-col flex-grow">
            <div className="px-8 pt-4 flex flex-row justify-between flex-wrap">
                <div className="flex flex-row mt-6">
                    <h2 className="text-xl font-Outfit-Bold"><span className="whitespace-nowrap">SELECT SEMESTER</span></h2>
                    <select className="rounded-[20px] w-36 focus:outline-none focus:ring-2 ml-5 focus:ring-green-login sm:ma" defaultValue="">
                        <option value="" disabled hidden></option>
                        <option value="S1">Semester 1</option>
                        <option value="S2">Semester 2</option>
                        <option value="S3">Semester 3</option>
                        <option value="S4">Semester 4</option>
                        <option value="S5">Semester 5</option>
                        <option value="S6">Semester 6</option>
                        <option value="S7">Semester 7</option>
                        <option value="S8">Semester 8</option>
                    </select>
                </div>

                <div className="flex flex-row justify-center items-baseline mt-6">
                    <h2 className="text-xl font-Outfit-Bold"><span className="whitespace-nowrap">EXAMINEE DETAILS</span></h2>
                    <input type="file" className="font-Outfit-Regular ml-5" />
                </div>
            </div>
            <div className="px-8 pt-6">
                <h2 className="text-xl font-Outfit-Bold mb-8">ADD SLOTS</h2>
                <form className="flex flex-col md:flex-row justify-around">
                    <Input input_id="date" title="Date" placeholder="09-09-2020" />
                    <DropDownInput input_id="branch" title="Branches" initial="all" options={['CSE', 'CSE-AI', 'CSE-DS', 'ECE', 'EEE', 'CIVIL', 'MECH']} />
                    <DropDownInput input_id="slot" title="Slot" initial="A" options={['B', 'C', 'D', 'E', 'F', 'G']} />
                    <Input input_id="subject" title="Subject" placeholder="MAT101" />
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-Outfit-Bold py-1 px-2 my-7 mx-2 h-10 w-[5rem] rounded-[20px]" type="submit">ADD</button>
                </form>
            </div>

            <div className="px-8 py-4">
                <h2 className="text-xl font-Outfit-Bold mb-4">EXAM SCHEDULES</h2>
                <div className="h-72 overflow-y-scroll">
                    <table className="table-auto w-full">
                        <thead className="sticky top-0">
                            <tr className="bg-grey-all font-Outfit-Bold">
                                <th className="text-left px-4 py-2 rounded-tl-2xl rounded-bl-2xl"><input type="checkbox" /></th>
                                <th className="text-left px-4 py-2"><span className="whitespace-nowrap">Date</span></th>
                                <th className="text-left px-4 py-2"><span className="whitespace-nowrap">Branch</span></th>
                                <th className="text-left px-4 py-2"><span className="whitespace-nowrap">Slot</span></th>
                                <th className="text-left px-4 py-2"><span className="whitespace-nowrap">Subject</span></th>
                                <th className="px-4 py-2 rounded-tr-2xl rounded-br-2xl"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {uerow.map(item => <UeRow key={item.id} date={item.date} branch={item.branch} slot={item.slot}
                                subject={item.subject} />)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="px-8 py-4 mt-4">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p className="font-Outfit-Regular">No of Exams scheduled : 7</p>
                    </div>
                    <div className="flex flex-row gap-20">
                        <button className="bg-green-500 hover:bg-green-400 text-white font-bold h-10 w-[10rem] rounded-[20px] font-Outfit-Bold" type="submit">SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
