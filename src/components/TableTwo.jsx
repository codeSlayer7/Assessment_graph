/* eslint-disable react/prop-types */
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import {
  ChevronLeftIcon as LeftArrow,
  ChevronRightIcon as RightArrow,
} from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  format,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  isWithinInterval,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import setDefaultOptions from "date-fns/setDefaultOptions";
// import {
//   MdOutlineKeyboardArrowRight as RighArrow,
//   MdOutlineKeyboardArrowLeft as LeftArrow,
// } from 'react-icons/Md';
import { ru } from "date-fns/locale";
import { Fragment, useState } from "react";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CalendarTwo({ monthMinus, lastComponent, data }) {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);

  setDefaultOptions({ locale: ru });

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());



  const days = eachDayOfInterval({
    start: !lastComponent
      ? add(firstDayCurrentMonth, { months: monthMinus ? monthMinus : -1 })
      : firstDayCurrentMonth,
    end: !lastComponent
      ? endOfMonth(
          add(firstDayCurrentMonth, { months: monthMinus ? monthMinus : -1 })
        )
      : endOfMonth(firstDayCurrentMonth),
  });



  return (
    <div className="h-[117px] w-[105px] block">
      <div className="pl-8">
        <span className=" text-xs font-semibold  text-[#959494]">
          {format(
            !lastComponent
              ? add(firstDayCurrentMonth, {
                  months: monthMinus ? monthMinus : -1,
                })
              : firstDayCurrentMonth,
            "LLL "
          )
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </span>
      </div>

      <div className=" grid grid-flow-col-dense  grid-flow-col grid-rows-7 text-sm">
        {days.map((day, dayIdx) => (
          <div key={dayIdx.toString()}>
            <button
              type="button"
              onClick={() => setSelectedDay(day)}
              className={classNames(
                "w-4 h-4  hover:bg-[#696868]",

                data?.some(([keyDate, value]) => {
                
                  return !isSameDay(new Date(keyDate), day) 
                    ? true
                    : false;
                }) && "bg-[#EDEDED]",
                data?.some(([keyDate, value]) => {
                  return isSameDay(new Date(keyDate), day) &&
                    value > 1 &&
                    value < 9
                    ? true
                    : false;
                }) && "bg-blue-200",

                data?.some(([keyDate, value]) => {
                  return isSameDay(new Date(keyDate), day) &&
                    value > 9 &&
                    value < 19
                    ? true
                    : false;
                }) && "bg-blue-300",
                data?.some(([keyDate, value]) => {
                  return isSameDay(new Date(keyDate), day) &&
                    value > 20 &&
                    value < 29
                    ? true
                    : false;
                }) && "bg-blue-500",
                data?.some(([keyDate, value]) => {
                   
                  return isSameDay(new Date(keyDate), day) && value > 29
                    ? true
                    : false;
                }) && "bg-[#254E77]"
              )}
         
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}
