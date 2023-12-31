import React from "react";
import { useRouter } from "next/router";
import Goals from "./Goals";
import Statistics from "./Statistics";
import Todos from "./Todos";
import Image from "next/image";
import { BiTask } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { GiStairsGoal } from "react-icons/gi";
import { BsPersonCheckFill } from "react-icons/bs";
import Link from "next/link";
import Home from "./Home";
import { Logout, UseAuth } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";
import Button from "../../Micro/Button/Button";
import { setCookie } from "cookies-next";

export type TabsTypes = {
  title: React.ReactNode;
  query: string;
};

const tabs: TabsTypes[] = [
  {
    title: (
      <div className="flex items-center">
        <AiOutlineHome /> <span className="pl-2">Home</span>
      </div>
    ),
    query: "home",
  },

  {
    title: (
      <div className="flex items-center">
        <GiStairsGoal /> <span className="pl-2">Goals</span>
      </div>
    ),
    query: "goals",
  },
  {
    title: (
      <div className="flex items-center">
        <BiTask /> <span className="pl-2">Todos</span>
      </div>
    ),
    query: "todos",
  },
  {
    title: (
      <div className="flex items-center">
        <IoIosStats /> <span className="pl-2">Statistics</span>
      </div>
    ),
    query: "statistics",
  },
];

const TabsComponent: any = {
  home: Home,
  goals: Goals,
  todos: Todos,
  statistics: Statistics,
};

const Tabs = () => {
  const router = useRouter();
  const [tabNavigation, setTabNavigation] = React.useState<boolean>(false);

  const handleTabChange = (tab: string) => {
    router.replace(
      { pathname: router.asPath.split("?")[0], query: { tab } },
      undefined,
      {
        shallow: true,
      }
    );
  };

  const CurrentTab = React.useMemo(
    () => (router.query.tab as string) || "blog",
    [router.query]
  );

  const Component = React.useCallback(() => {
    const tab = tabs.find((tab) => tab.query === CurrentTab);
    if (!tab) {
      return <Home />;
    }
    const TabComponent = TabsComponent[CurrentTab || "blog"];
    return <TabComponent />;
  }, [CurrentTab]);

  const handleLogOut = () => {
    Logout();
    setTimeout(() => {
      toast.info("Bye for now, see you soon!");
      router.push("/");
    }, 500);
  };

  const currentUser = UseAuth();
  setCookie("userEmail", currentUser?.email)
  return (
    <main className="2xl:container 2xl:mx-auto">
      <div className="items-center sm:p-5 p-3 flex justify-between border-b">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Navbar/logo.png"
            alt="logo"
            width={34}
            height={34}
          />
          <span className="pl-1 text-lg font-bold">GoalTracker</span>
        </Link>

        <p className="md:flex hidden items-center text-3xl xl:text-2xl text-black">
          <BsPersonCheckFill /> <span className="text-sm ml-3">{currentUser?.email}</span>
        </p>

        <div
          onClick={() => setTabNavigation(!tabNavigation)}
          className="text-2xl md:hidden "
        >
          {!tabNavigation ? <CiMenuBurger /> : <TfiClose />}
        </div>
      </div>

      <div className="grid flex-grow w-full  gap-x-1 md:grid-cols-3 lg:grid-cols-5">
        <section className="md:bg-white bg-black w-full ">
          <ul
            className={` flex md:pt-10 md:h-fit md:static md:w-full absolute px-5 w-full left-0 top-[78px] py-5 text-lg cursor-pointer flex-col md:items-start md:space-x-0 ${
              !tabNavigation
                ? "hidden  md:block"
                : " flex sm:items-center z-50 bg-white text-black  h-full"
            }`}
          >
            {tabs.map((tab) => (
              <div
                key={tab.query}
                className="pb-7"
                onClick={() => {
                  handleTabChange(tab.query);
                  setTabNavigation(false);
                }}
              >
                <li
                  className={`text-lg ${
                    tab.query === CurrentTab
                      ? "bg-black rounded-lg text-white w-fit"
                      : ""
                  } p-2`}
                >
                  {tab.title}
                </li>
              </div>
            ))}
            <Button
              className="flex items-center text-lg px-2"
              onClick={handleLogOut}
            >
              <AiOutlineLogout className="mr-2" /> Logout
            </Button>
          </ul>
        </section>

        <section className="w-full h-full py-8 border-l md:col-span-2 lg:col-span-4">
          <div className="font-nunito">
            <Component />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Tabs;
