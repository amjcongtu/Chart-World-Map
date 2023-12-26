/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useCountries } from "../../services/queries/useCountries";
import "./index.css";

const Chart = () => {
  const chartRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: countries }: any = useCountries();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const languages = countries?.map((country: any) => country.languages);
        if (languages) {
          const allLanguages = [].concat(...languages);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const languageCounts = allLanguages.reduce((acc: any, language) => {
            if (language && typeof language === "object") {
              const languageCode = Object.keys(language)[0];
              const languageName = language[languageCode];
              if (languageCode && languageName) {
                acc[languageCode] = {
                  name: languageName,
                  value: (acc[languageCode]?.value || 0) + 1,
                };
              }
            }

            return acc;
          }, {});

          const data = Object.values(languageCounts);
          const myChart = echarts.init(chartRef.current);
          myChart.setOption({
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            legend: {
              top: "0%",
              left: "center",
            },
            series: [
              {
                name: "Ngôn Ngữ",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: true,
                label: {
                  show: false,
                  position: "center",
                },
                labelLine: {
                  show: false,
                },
                data,
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                  },
                },
              },
            ],
          });
          myChart.resize();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [countries]);

  return <div className="chart" ref={chartRef} />;
};

export default React.memo(Chart);
