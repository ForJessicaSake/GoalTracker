import React from "react";
import { useRouter } from "next/router";
import Goals from "./Goals";
import Statistics from "./Statistics";
import Todos from "./Todos";
import { BiTask } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import { BsPersonCheckFill } from "react-icons/bs";
import Home from "./Home";
import Brand from "../../Micro/Brand/Brand";
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
    () => (router.query.tab as string) || "home",
    [router.query]
  );

  const Component = React.useCallback(() => {
    const tab = tabs.find((tab) => tab.query === CurrentTab);
    if (!tab) {
      return <Home />;
    }
    const TabComponent = TabsComponent[CurrentTab || "home"];
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
  React.useEffect(() => {
    if (currentUser?.email) {
      setCookie("userEmail", currentUser.email);
    }
  }, [currentUser?.email]);
  return (
    <main className="min-h-screen bg-ink text-paper">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8">
        <Brand />

        <p className="hidden items-center text-sm text-mist md:flex">
          <BsPersonCheckFill className="mr-2 text-accent" />
          {currentUser?.email}
        </p>

        <button
          type="button"
          onClick={() => setTabNavigation(!tabNavigation)}
          className="text-sm font-medium md:hidden"
        >
          {tabNavigation ? "Close" : "Menu"}
        </button>
      </div>

      <div className="grid w-full md:grid-cols-[220px_1fr]">
        <section className="border-white/10 md:border-r">
          <ul
            className={`cursor-pointer flex-col px-5 py-8 text-sm md:static md:flex md:h-fit md:w-full ${
              !tabNavigation
                ? "hidden md:flex"
                : "fixed inset-0 z-50 flex h-full w-full bg-ink px-6 pt-8 text-paper"
            }`}
          >
            {tabNavigation && (
              <button
                type="button"
                className="mb-8 self-end text-sm font-medium md:hidden"
                onClick={() => setTabNavigation(false)}
              >
                Close
              </button>
            )}
            {tabs.map((tab) => (
              <div
                key={tab.query}
                className="pb-2"
                onClick={() => {
                  handleTabChange(tab.query);
                  setTabNavigation(false);
                }}
              >
                <li
                  className={`rounded-lg px-3 py-2 text-sm ${
                    tab.query === CurrentTab
                      ? "bg-accent/15 text-paper"
                      : "text-mist"
                  }`}
                >
                  {tab.title}
                </li>
              </div>
            ))}
            <Button
              className="mt-4 flex items-center px-3 text-sm text-mist"
              onClick={handleLogOut}
            >
              <AiOutlineLogout className="mr-2" /> Logout
            </Button>
          </ul>
        </section>

        <section className="h-full w-full py-8 md:border-l md:border-white/10">
          <div>
            <Component />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Tabs;
