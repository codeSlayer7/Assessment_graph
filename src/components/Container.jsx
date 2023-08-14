import { useEffect, useState } from "react";
import CalendarTwo from "./TableTwo";
import axios from "axios";

const Container = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://dpg.gg/test/calendar.json")
      .then((res) => setData((data) => Object.entries(res.data)));
  }, []);
  
  return (
    <div className="flex mt-20 ml-12">

      <div className="mt-[0.8rem] mr-2 flex flex-col  leading-[1.4rem] text-xs  text-[#959494]">
        <div>Пн</div>
        <div>Вт</div>
        <div>Ср</div>
        <div>Чт</div>
        <div>Пт</div>
        <div>Сб</div>
        <div>Вс</div>
      </div>

      <CalendarTwo monthMinus={-11} data={data} />
      <CalendarTwo monthMinus={-10} data={data} />
      <CalendarTwo monthMinus={-9} data={data} />
      <CalendarTwo monthMinus={-8} data={data} />
      <CalendarTwo monthMinus={-7} data={data} />
      <CalendarTwo monthMinus={-6} data={data} />
      <CalendarTwo monthMinus={-5} data={data} />
      <CalendarTwo monthMinus={-4} data={data} />
      <CalendarTwo monthMinus={-3} data={data} />
      <CalendarTwo monthMinus={-2} data={data} />
      <CalendarTwo monthMinus={-1} data={data} />
      <CalendarTwo lastComponent={true} data={data} />
    </div>
  );
};

export default Container;
