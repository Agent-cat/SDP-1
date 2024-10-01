import { CirclePlus, LayoutPanelTop, Palette, Code, Image } from "lucide-react";
import { DragButton } from "../DragComponents/DragButton";
import { DragText } from "../DragComponents/DragText";
import { DragInput } from "../DragComponents/DragInput";
import { DragImage } from "../DragComponents/DragImage";
import { DragContainer } from "../DragComponents/DragContainer";
export const SidebarNavlinks = [
  {
    Icon: <CirclePlus size={26} />,
    to: "/create",
    tooltip: "Create",
  },
  {
    Icon: <LayoutPanelTop />,
    to: "/components",
    tooltip: "Components",
  },
  {
    Icon: <Palette />,
    to: "/appearance",
    tooltip: "Appearance",
  },
  {
    Icon: <Code />,
    to: "/code",
    tooltip: "Code",
  },
  {
    Icon: <Image />,
    to: "/images",
    tooltip: "Images",
  },
];

export const AppearanceNavlinks = [
  {
    title: "Layout",
    content: (
      <>
        <div className="flex items-center justify-between w-full">
          <span>Column Gap</span>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="20"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Row Gap</span>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="20"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
      </>
    ),
  },
  {
    title: "Spacing",
    content: (
      <>
        <div className="flex items-center justify-between w-full">
          <span>Padding</span>
          <input
            type="number"
            min="0"
            max="100"
            defaultValue="16"
            className="w-16 border border-blue-300 rounded px-2 py-1 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Margin</span>
          <input
            type="number"
            min="0"
            max="100"
            defaultValue="16"
            className="w-16 border border-blue-300 rounded px-2 py-1 transition-all duration-300 ease-in-out"
          />
        </div>
      </>
    ),
  },
  {
    title: "Size",
    content: (
      <>
        <div className="flex items-center justify-between w-full">
          <span>Width</span>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="100"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Height</span>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="100"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
      </>
    ),
  },
  {
    title: "Typography",
    content: (
      <>
        <div className="flex items-center justify-between w-full">
          <span>Font Size</span>
          <input
            type="range"
            min="8"
            max="72"
            defaultValue="16"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Line Height</span>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            defaultValue="1.5"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
      </>
    ),
  },
  {
    title: "Position",
    content: (
      <>
        <div className="flex items-center justify-between w-full">
          <span>Top</span>
          <input
            type="number"
            defaultValue="0"
            className="w-16 border border-gray-300 rounded px-2 py-1 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Left</span>
          <input
            type="number"
            defaultValue="0"
            className="w-16 border border-gray-300 rounded px-2 py-1 transition-all duration-300 ease-in-out"
          />
        </div>
      </>
    ),
  },
  {
    title: "Border",
    content: (
      <>
        <div className="flex items-center justify-between w-full">
          <span>Border Width</span>
          <input
            type="range"
            min="0"
            max="10"
            defaultValue="1"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Border Color</span>
          <input
            type="color"
            className="h-8 w-16 transition-all duration-300 ease-in-out"
            defaultValue="#3B82F6"
          />
        </div>
      </>
    ),
  },
  {
    title: "Colors",
    content: (
      <>
        <div className="flex items-center justify-between w-full">
          <span>Text Color</span>
          <input
            type="color"
            className="h-8 w-16 transition-all duration-300 ease-in-out"
            defaultValue="#1E3A8A"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Background Color</span>
          <input
            type="color"
            className="h-8 w-16 transition-all duration-300 ease-in-out"
            defaultValue="#FFFFFF"
          />
        </div>
      </>
    ),
  },
  {
    title: "Animations",
    content: (
      <>
        <div className="flex items-center justify-between w-full">
          <span>Animation Duration</span>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            defaultValue="0.3"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Animation Type</span>
          <select className="border border-gray-300 rounded px-2 py-1 transition-all duration-300 ease-in-out">
            <option>Fade</option>
            <option>Slide</option>
            <option>Scale</option>
          </select>
        </div>
      </>
    ),
  },
  {
    title: "Effects",
    content: (
      <>
        <div className="flex items-center justify-between w-full">
          <span>Box Shadow</span>
          <input
            type="range"
            min="0"
            max="20"
            defaultValue="0"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Blur</span>
          <input
            type="range"
            min="0"
            max="10"
            defaultValue="0"
            className="w-1/2 transition-all duration-300 ease-in-out"
          />
        </div>
      </>
    ),
  },
  { title: "Responsive Design", content: <div></div> },
  { title: "Icons", content: <div></div> },
  { title: "Forms", content: <div></div> },
  { title: "Navigation", content: <div></div> },
  { title: "Buttons", content: <div></div> },
];

export const components = [
  { name: "Button", component: DragButton },
  { name: "Text", component: DragText },
  { name: "Input", component: DragInput },
  { name: "Image", component: DragImage },
  { name: "Container", component: DragContainer },
];
