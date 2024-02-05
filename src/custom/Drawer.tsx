/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CustomAccordian from "./Accordian";
import { Academic } from "@/data/AcademicData";
import { ReactElement, JSXElementConstructor, ReactNode } from "react";
import { PersonalData } from "@/data/PersonalData";
import { CreativeData } from "@/data/CreativeData";

export default function DrawerCard(props: {
  triggerName:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | null
    | undefined;
}) {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="md:mb-4 mb-2 text-[12px] font-bold flex hover:text-[#676767]">
          [ {props.triggerName} ]
        </div>
      </DrawerTrigger>
      <div>
        <DrawerContent>
          <div className="p-5">
            <div className="flex flex-row justify-between w-full font-JB text-[12px] mb-[4rem]">
              <div>{props.triggerName}</div>
              <DrawerClose>
                <div className="hover:text-[#a9a9a9]">[ CLOSE ]</div>
              </DrawerClose>
            </div>
            {props.triggerName === "ACADEMIC" ? (
              <div>
                <div className="text-[25px] mb-2">Educational Milestones</div>
                <div className="opacity-40 mb-9 text-[15px]">
                  Navigate through key stages of my academic journey,
                  highlighting achievements and notable projects.
                </div>

                {Academic.slice()
                  .reverse()
                  .map((item, index) => (
                    <CustomAccordian
                      key={index}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
              </div>
            ) : props.triggerName === "PERSONAL" ? (
              <div>
                <div className="text-[25px] mb-2">Personal Achievements</div>
                <div className="opacity-40 mb-9 text-[15px]">
                  Explore significant milestones and projects that showcase my
                  skills and achievements.
                </div>

                {PersonalData.slice()
                  .reverse()
                  .map((item, index) => (
                    <CustomAccordian
                      key={index}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
              </div>
            ) : props.triggerName === "CREATIVE" ? (
              <div>
                <div className="text-[25px] mb-2">Creative Experience</div>
                <div className="opacity-40 mb-9 text-[15px]">
                  Explore my creative journey, contributions, and impactful
                  projects in graphic design and technical management at ENSA
                  Campus.
                </div>

                {CreativeData.slice()
                  .reverse()
                  .map((item, index) => (
                    <CustomAccordian
                      key={index}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
              </div>
            ) : null}
          </div>
        </DrawerContent>
      </div>
    </Drawer>
  );
}
