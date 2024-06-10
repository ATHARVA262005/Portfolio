import ThreeDModel from './ThreeDModel';

const ThreeDModelSection = () => {
    return (
        <div className="flex justify-center py-12 modelScale" > {/* Adjust margin or padding as needed */}
            <div 
                className="my-20 pz-9"
            >
                <ThreeDModel />
            </div>
        </div>
    );
};

export default ThreeDModelSection;
