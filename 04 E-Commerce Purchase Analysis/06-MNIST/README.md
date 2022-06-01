# MNIST Dataset

MNIST stands for Modified National Institue of Standards and Technology

The MNIST database of handwritten digits has a training set of 60,000 examples of digits and a test set of 10,000 examples of digits. It is a subset of a larger set available from NIST. The digits have been size-normalized and centered in a fixed-size image.

The original black and white (bilevel) images from NIST were size normalized to fit in a 20x20 pixel box while preserving their aspect ratio. The resulting images contain grey levels as a result of the anti-aliasing technique used by the normalization algorithm. The images were centered in a 28x28 image by computing the center of mass of the pixels, and translating the image so as to position this point at the center of the 28x28 field.

For reference, see: http://yann.lecun.com/exdb/mnist/

## STEPS
1. Import necessary datasets
2. Load data into training and test sets
3. Convert the labels to one-hot encoding. That means instead of having labels such as "one", "two", etc, we'll have a single array for each image. The label will now be represented based off the index position in the label array. The corresposinding label will be 1 at the index location and 0 everywhere else. For example, a drawn digit of 6 would have this label array - [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0].
4. Normalize data
5. Train the model adding a convolutional layer, pooling layer, hidden layer(s) and an output layer. The data needs to be flattened from 28*28 to 764 before the final layer.
6. Fit the model with desired number of epochs.
7. Evaluate the model.
8. Generate a claasification report based on the categorical y_test values and predictions.
9. Verify if the predictions match with the labels.
