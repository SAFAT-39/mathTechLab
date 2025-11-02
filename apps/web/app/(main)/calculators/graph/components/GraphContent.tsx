import React from 'react';

const GraphContent = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Advanced Graphing Calculator for Mathematical Functions
        </h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            Our powerful graphing calculator provides an intuitive interface for visualizing mathematical functions,
            equations, and data points. Whether you're a student learning algebra, a teacher creating lesson plans,
            or a professional working with mathematical models, this tool offers precise and interactive graphing capabilities.
          </p>
          <p className="mb-4">
            The calculator supports various mathematical functions including linear equations, quadratic functions,
            trigonometric functions, exponential and logarithmic functions, and more. You can plot multiple functions
            simultaneously, analyze their intersections, and explore mathematical concepts through visual representation.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Graphing Calculator</h2>
        <div className="prose prose-lg text-gray-600">
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Enter Your Function:</strong> Type your mathematical function using standard notation.
              For example, use "x^2" for x squared or "sin(x)" for sine of x.
            </li>
            <li>
              <strong>Adjust the View:</strong> Use the zoom controls to focus on specific areas of your graph.
              You can also drag the graph to pan around.
            </li>
            <li>
              <strong>Add Multiple Functions:</strong> Plot several functions at once to compare them or find
              their points of intersection.
            </li>
            <li>
              <strong>Analyze Points:</strong> Hover over points on the graph to see their exact coordinates
              and values.
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Supported Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Function Types</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Polynomial functions</li>
              <li>Trigonometric functions</li>
              <li>Exponential functions</li>
              <li>Logarithmic functions</li>
              <li>Rational functions</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Analysis Tools</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Point plotting</li>
              <li>Function intersections</li>
              <li>Domain and range visualization</li>
              <li>Asymptote detection</li>
              <li>Derivative visualization</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">How do I plot a function?</h3>
            <p className="text-gray-600">
              Simply enter your function in the input field using standard mathematical notation.
              For example, to plot y = x² + 2x + 1, enter "x^2 + 2x + 1".
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Can I plot multiple functions at once?</h3>
            <p className="text-gray-600">
              Yes! You can add multiple functions to the same graph. Each function will be displayed
              in a different color for easy differentiation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">How do I find the intersection points?</h3>
            <p className="text-gray-600">
              Plot the functions you want to analyze, and the calculator will automatically highlight
              their intersection points. You can hover over these points to see their exact coordinates.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">What types of functions are supported?</h3>
            <p className="text-gray-600">
              Our calculator supports a wide range of mathematical functions including polynomials,
              trigonometric functions, exponentials, logarithms, and rational functions. You can also
              plot piecewise functions and inequalities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphContent; 