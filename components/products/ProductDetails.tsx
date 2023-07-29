'use client';

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Tabs, Flowbite } from 'flowbite-react';
import React from 'react';

const customTheme: CustomFlowbiteTheme = {
    tab: {"base": "flex flex-col gap-2",
    "tablist": {
      "base": "flex text-center",
      "styles": {
        "default": "flex-wrap",
        "underline": "flex-wrap",
        "pills": "flex-wrap font-medium text-sm text-[#767676] uppercase",
        "fullWidth": "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none"
      },
      "tabitem": {
        "base": "flex items-center justify-center even:px-6 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        "styles": {
          "default": {
            "base": "uppercase leading-4",
            "active": {
              "on": "text=[#0000] text-sm",
              "off": "text-[#767676] text-sm"
            }
          },
          "underline": {
            "base": "rounded-t-lg",
            "active": {
              "on": "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
              "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            }
          },
          "pills": {
            "base": "",
            "active": {
              "on": "rounded-lg bg-cyan-600 text-white",
              "off": "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          },
          "fullWidth": {
            "base": "ml-0 first:ml-0 w-full rounded-none flex",
            "active": {
              "on": "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
              "off": "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none"
            }
          }
        },
      }
    },
    "tabpanel": "py-3 text-[#00000] text-sm leading-5"
  }
}

export default function ProductDetailTabs() {

    // Define internal data for the tabs
  const tabsData = [
    {
      title: 'details',
      content: [
        {
          info: "The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.",
          editorText: "See the",
          editorCTA: "EDITOR’S NOTE",
          editorUrl: "url",
          designInfo: "Learn about the",
          designerCTA: "DESIGNER",
          designerUrl: "url"
        }
      ],
    },
    {
      title: 'delivery',
      content: [
        {
          info: "The Delivery Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.",
          editorText: "See the",
          editorCTA: "EDITOR’S NOTE",
          editorUrl: "url",
          designInfo: "Learn about the",
          designerCTA: "DESIGNER",
          designerUrl: "url"
        }
      ],
    },
    {
      title: 'fit',
      content: [
        {
          info: "The Fit Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.",
          editorText: "See the",
          editorCTA: "EDITOR’S NOTE",
          editorUrl: "url",
          designInfo: "Learn about the",
          designerCTA: "DESIGNER",
          designerUrl: "url"
        }
      ],
    },
    {
      title: 'share',
      content: [
        {
          info: "The Share Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.",
          editorText: "See the",
          editorCTA: "EDITOR’S NOTE",
          editorUrl: "url",
          designInfo: "Learn about the",
          designerCTA: "DESIGNER",
          designerUrl: "url"
        }
      ],
    },
  ];

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Tabs.Group aria-label="Default tabs" style="default">
        {/* Map through the tabsData to generate Tabs.Item components */}
        {tabsData.map((tab, index) => (
          <Tabs.Item key={index} {...tab}>
            {/* Map through the content array and render specific elements */}
            {tab.content.map((contentItem, itemIndex) => (
              <div key={itemIndex}>
                <p>{contentItem.info}</p>
                <p className="my-4">
                  {contentItem.editorText}
                  <a href={contentItem.editorUrl} className="uppercase underline pl-2">
                    {contentItem.editorCTA}
                  </a>
                </p>
                <p>
                  {contentItem.designInfo}
                  <a href={contentItem.designerUrl} className="uppercase underline pl-2">
                    {contentItem.designerCTA}
                  </a>
                </p>
              </div>
            ))}
          </Tabs.Item>
        ))}
      </Tabs.Group>
    </Flowbite>
  )
}