import React from 'react';

const TrainingTips = () => {
    return (
        <div className="container mx-auto my-16 px-5">
            <h2 className="text-center text-3xl font-bold mb-8">Training Tips for Marathon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Tip 1 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Start Early</h3>
                    <p>
                        Begin your training at least 3-4 months before the marathon. Consistency in your training schedule is key.
                    </p>
                </div>
                {/* Tip 2 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Hydration is Key</h3>
                    <p>
                        Make sure to stay hydrated during your long runs and the marathon itself. Carry water or energy drinks when necessary.
                    </p>
                </div>
                {/* Tip 3 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Proper Nutrition</h3>
                    <p>
                        Fuel your body with the right food before, during, and after training sessions. Focus on a balanced diet with carbs, protein, and fats.
                    </p>
                </div>
                {/* Tip 4 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Listen to Your Body</h3>
                    <p>
                        Avoid pushing yourself too hard. Take rest days to recover and prevent injury.
                    </p>
                </div>
                {/* Tip 5 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Cross-Train</h3>
                    <p>
                        Include cross-training activities like cycling, swimming, or strength training to improve your stamina and endurance.
                    </p>
                </div>
                {/* Tip 6 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Rest and Recovery</h3>
                    <p>
                        Get enough sleep and allow your muscles to recover between training sessions. Recovery is just as important as training.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrainingTips;
