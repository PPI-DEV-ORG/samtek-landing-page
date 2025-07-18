"use client";

import { Eye, Cpu, Factory, Truck, HardHat, Leaf } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-center">
            About PT Safanah Alvan Maksima
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Building smart surveillance systems with AI to power industrial
            transformation.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src="/images/logo-sam.png"
              alt="PT Safanah Alvan Maksima Logo"
              className="mx-auto h-16 w-auto mb-6"
            />

            {/* Text */}
            <p className="text-lg leading-relaxed text-gray-200">
              <strong className="text-white">PT Safanah Alvan Maksima</strong>{" "}
              is an Indonesian company established in{" "}
              <strong className="text-white">2020</strong>, specializing in
              next-generation Surveillance Systems powered by Artificial
              Intelligence.
              <br />
              <br />
              In an era of rapid industrial transformation, we deliver smart,
              flexible, and integrated AI Vision solutions that push automation
              forward — efficiently, intelligently, and safely.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-white">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" /> Modular AI Vision
                Platform
              </h3>
              <p className="text-gray-300">
                Adaptable to various workflows across industries, offering
                real-time process automation and deep visual intelligence.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-400" /> Key Capabilities
              </h3>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                <li>Anomaly and defect detection</li>
                <li>Safety & compliance monitoring</li>
                <li>Production tracking & reporting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            Industries We Empower
          </h2>
          <p className="text-center max-w-3xl mx-auto text-gray-300 text-base">
            Our AI Vision platform is built to adapt across diverse industries,
            empowering automation, safety, and operational excellence in any
            environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Factory className="text-blue-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">
                  Manufacturing
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Automate visual quality inspection, detect defects in real-time,
                and monitor production lines to improve product consistency and
                reduce waste.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Truck className="text-yellow-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">Logistics</h3>
              </div>
              <p className="text-sm text-gray-300">
                Track vehicle movement, monitor loading areas, and improve
                warehouse efficiency with smart surveillance and anomaly
                detection systems.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <HardHat className="text-orange-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">Mining</h3>
              </div>
              <p className="text-sm text-gray-300">
                Enhance safety compliance by detecting helmet and vest usage,
                monitor hazardous zones, and reduce operational risks with
                intelligent alerts.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="text-green-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">
                  Agriculture
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Monitor crop health, detect pest or disease presence early, and
                track equipment and worker activity to optimize farming
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-500 opacity-10 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
}
