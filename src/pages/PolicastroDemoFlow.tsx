import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";

import PolicastroLayout from "../components/layouts/PolicastroLayout";
import { demoScenes } from "../demo/demoScenes";

const SCENE_DURATION = 5000;

export default function PolicastroDemoFlow() {
  const [sceneIndex, setSceneIndex] =
    useState(0);

  useEffect(() => {
    const timer =
      setInterval(() => {

        setSceneIndex((current) => {

          if (
            current >=
            demoScenes.length - 1
          ) {
            return current;
          }

          return current + 1;
        });

      }, SCENE_DURATION);

    return () =>
      clearInterval(timer);

  }, []);

  const scene =
    demoScenes[sceneIndex];

  const progress =
    ((sceneIndex + 1) /
      demoScenes.length) *
    100;

  function restartDemo() {
    setSceneIndex(0);
  }

  return (
    <PolicastroLayout>

      <div className="max-w-6xl mx-auto">

        <div
          className="
            w-full
            h-2
            bg-[#2A2F38]
            rounded-full
            overflow-hidden
            mb-6
          "
        >
          <div
            className="
              h-full
              bg-[#C9A86A]
              transition-all
              duration-1000
            "
            style={{
              width:
                `${progress}%`,
            }}
          />
        </div>

        <div
          className="
            bg-[#181C22]
            border
            border-[#2A2F38]
            rounded-3xl
            overflow-hidden
          "
        >

          <img
            src={scene.image}
            alt={scene.title}
            className="
              w-full
              h-[520px]
              object-cover
            "
          />

          <div className="p-10">

            <div
              className="
                text-[#C9A86A]
                uppercase
                tracking-widest
                text-sm
                mb-4
              "
            >
              Escena {scene.id}
            </div>

            <h1
              className="
                text-5xl
                font-bold
                text-white
                mb-4
              "
            >
              {scene.title}
            </h1>

            <p
              className="
                text-xl
                text-gray-400
              "
            >
              {scene.subtitle}
            </p>

          </div>

        </div>

        <div
          className="
            flex
            justify-center
            mt-8
          "
        >
          <button
            onClick={restartDemo}
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-[#C9A86A]
              text-black
              font-semibold
            "
          >
            <RotateCcw size={18} />
            Reiniciar demo
          </button>
        </div>

      </div>

    </PolicastroLayout>
  );
}