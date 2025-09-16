import React from "react";
import { StickyScroll } from "./Scroll_details"; // Adjust the import path as needed

const content = [
  {
    title: "Welcome to FitMate",
    description: "Your ultimate companion for a healthier lifestyle. FitMate is designed to make fitness and nutrition tracking simple, effective, and personalized for everyone on their wellness journey.",
    content: (
      <div className="flex h-full flex-col justify-center p-8">
        <div className="text-center">
          <h3 className="mb-4 text-3xl font-bold text-white">🏋️‍♀️ FitMate</h3>
          <p className="text-lg text-white/90">Empowering Your Fitness Journey</p>
          <div className="mt-6 flex justify-center space-x-6">
            <div className="rounded-full bg-white/20 p-4">
              <span className="text-4xl">🥗</span>
            </div>
            <div className="rounded-full bg-white/20 p-4">
              <span className="text-4xl">📊</span>
            </div>
            <div className="rounded-full bg-white/20 p-4">
              <span className="text-4xl">🎯</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Smart Food Discovery",
    description: "Discover comprehensive nutritional information about any food item. Our intelligent system helps you make informed dietary choices by providing detailed macro and micronutrient breakdowns.",
    content: (
      <div className="flex h-full flex-col justify-center p-8">
        <div className="space-y-4">
          <div className="rounded-lg bg-white/10 p-4">
            <h4 className="mb-2 text-xl font-semibold text-white flex items-center">
              <span className="mr-3 text-3xl">🔍</span>
              Food Search
            </h4>
            <p className="text-white/80">Search from thousands of food items and get instant nutritional data</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <h4 className="mb-2 text-xl font-semibold text-white flex items-center">
              <span className="mr-3 text-3xl">📊</span>
              Nutrient Analysis
            </h4>
            <p className="text-white/80">Detailed breakdown of calories, proteins, carbs, fats, vitamins & minerals</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <h4 className="mb-2 text-xl font-semibold text-white flex items-center">
              <span className="mr-3 text-3xl">🥘</span>
              Recipe Insights
            </h4>
            <p className="text-white/80">Analyze complete meals and recipes for total nutritional content</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Personalized Goal Setting",
    description: "Set and achieve your fitness goals with our intelligent goal-setting system. Whether it's weight loss, muscle gain, or maintaining a healthy lifestyle, FitMate adapts to your needs.",
    content: (
      <div className="flex h-full flex-col justify-center p-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-white/10 p-4 text-center">
            <span className="mb-2 block text-2xl">⚖️</span>
            <h4 className="mb-1 font-semibold text-white">Weight Management</h4>
            <p className="text-sm text-white/80">Lose, gain, or maintain weight with precision</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 text-center">
            <span className="mb-2 block text-2xl">💪</span>
            <h4 className="mb-1 font-semibold text-white">Muscle Building</h4>
            <p className="text-sm text-white/80">Optimize protein intake for muscle growth</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 text-center">
            <span className="mb-2 block text-2xl">🏃</span>
            <h4 className="mb-1 font-semibold text-white">Endurance</h4>
            <p className="text-sm text-white/80">Fuel your cardio and endurance activities</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 text-center">
            <span className="mb-2 block text-2xl">🧘</span>
            <h4 className="mb-1 font-semibold text-white">Wellness</h4>
            <p className="text-sm text-white/80">Maintain overall health and vitality</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Weight Loss Support",
    description: "Our scientifically-backed approach helps users achieve sustainable weight loss through proper nutrition tracking, calorie management, and personalized recommendations.",
    content: (
      <div className="flex h-full flex-col justify-center p-8">
        <div className="space-y-6">
          <div className="text-center">
            <span className="mb-3 block text-5xl">📉</span>
            <h4 className="mb-2 text-xl font-bold text-white">Sustainable Weight Loss</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-green-400">✓</span>
              <span className="text-white/90">Calorie deficit tracking</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-400">✓</span>
              <span className="text-white/90">Portion size guidance</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-400">✓</span>
              <span className="text-white/90">Healthy food alternatives</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-400">✓</span>
              <span className="text-white/90">Progress visualization</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Progress Tracking & Monitoring",
    description: "Stay motivated with comprehensive tracking tools. Monitor your daily intake, track your progress towards goals, and visualize your fitness journey with detailed analytics and insights.",
    content: (
      <div className="flex h-full flex-col justify-center p-8">
        <div className="space-y-4">
          <div className="rounded-lg bg-white/10 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-white/90">Daily Calories</span>
              <span className="text-white font-semibold">1,847 / 2,000</span>
            </div>
            <div className="h-2 rounded-full bg-white/20">
              <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-green-400 to-blue-400"></div>
            </div>
          </div>
          <div className="rounded-lg bg-white/10 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-white/90">Protein</span>
              <span className="text-white font-semibold">156g / 150g</span>
            </div>
            <div className="h-2 rounded-full bg-white/20">
              <div className="h-2 w-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </div>
          </div>
          <div className="rounded-lg bg-white/10 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-white/90">Weekly Goal</span>
              <span className="text-white font-semibold">5 / 7 days</span>
            </div>
            <div className="h-2 rounded-full bg-white/20">
              <div className="h-2 w-[71%] rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Meet the Team",
    description: "Behind FitMate is a passionate team of developers, nutritionists, and fitness enthusiasts dedicated to making healthy living accessible and enjoyable for everyone.",
    content: (
      <div className="flex h-full flex-col justify-center p-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="rounded-lg bg-white/10 p-4 text-center">
            <div className="mb-3 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-lg">
                👨‍💻
              </div>
            </div>
            <h4 className="mb-1 font-semibold text-white">Development Team</h4>
            <p className="text-sm text-white/80">Full-stack developers passionate about health tech</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 text-center">
            <div className="mb-3 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold text-lg">
                🥗
              </div>
            </div>
            <h4 className="mb-1 font-semibold text-white">Nutrition Experts</h4>
            <p className="text-sm text-white/80">Certified nutritionists ensuring accurate data</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 text-center">
            <div className="mb-3 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-red-400 text-white font-bold text-lg">
                🏋️
              </div>
            </div>
            <h4 className="mb-1 font-semibold text-white">Fitness Coaches</h4>
            <p className="text-sm text-white/80">Personal trainers who understand real-world challenges</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Our Mission",
    description: "To democratize access to personalized nutrition and fitness guidance, making it easier for everyone to achieve their health goals through technology and evidence-based practices.",
    content: (
      <div className="flex h-full flex-col justify-center p-8">
        <div className="text-center space-y-6">
          <div className="mb-4">
            <span className="text-4xl">🌟</span>
          </div>
          <h4 className="text-2xl font-bold text-white">Empowering Healthier Lives</h4>
          <div className="space-y-4">
            <div className="rounded-lg bg-white/10 p-3">
              <p className="text-white/90 italic">"Making nutrition tracking simple and accessible for everyone"</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="text-white/90 italic">"Building sustainable healthy habits through technology"</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="text-white/90 italic">"Supporting your fitness journey every step of the way"</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const About_us = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-5xl font-bold">About FitMate</h1>
          <p className="mx-auto max-w-2xl text-xl opacity-90">
            Discover the story behind your favorite nutrition and fitness companion
          </p>
        </div>
      </div>

      {/* Sticky Scroll Content */}
      <StickyScroll content={content} />

      {/* Footer CTA */}
      <div className="bg-gray-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-xl text-gray-300">
            Join thousands of users who are already achieving their fitness goals with FitMate
          </p>
          <div className="space-x-4">
            <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-semibold text-white transition-transform hover:scale-105">
              Get Started
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-gray-900">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;