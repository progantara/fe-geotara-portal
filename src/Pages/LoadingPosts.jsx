export function slowImport(value, ms = 1000) {
  return new Promise(resolve => {
	setTimeout(() => resolve(value), ms);
  });
}

function LoadingPenginapan() {
    return (
        <div className="grid grid-cols-3 gap-14 ">
			<div className="relative flex flex-col rounded-[2rem] overflow-hidden shadow-lg">
				<div className="w-full h-full bg-gray-200 animate-pulse">
				</div>
			</div>
            <div class="relative flex flex-col rounded-[2rem] overflow-hidden shadow-lg">
				<div class="w-full h-full bg-gray-200 animate-pulse"></div>
			</div>
            <div class="relative flex flex-col rounded-[2rem] overflow-hidden shadow-lg">
				<div class="w-full h-[29.5rem] bg-gray-200 animate-pulse"></div>
			</div>
            <div class="relative flex flex-col rounded-[2rem] overflow-hidden shadow-lg">
				<div class="w-full h-[29.5rem] bg-gray-200 animate-pulse"></div>
			</div>
            <div class="relative flex flex-col rounded-[2rem] overflow-hidden shadow-lg">
				<div class="w-full h-[29.5rem] bg-gray-200 animate-pulse"></div>
			</div>
            <div class="relative flex flex-col rounded-[2rem] overflow-hidden shadow-lg">
				<div class="w-full h-[29.5rem] bg-gray-200 animate-pulse"></div>
			</div>
		</div>
    );
}

export default LoadingPenginapan;


