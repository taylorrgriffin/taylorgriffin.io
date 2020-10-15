const example1 = `# This program computes the area of a circle
pi = 3.1415
r = 8.0
area = pi * r * r
`;

const example2 = `# This program demonstrates conditionals
a = True
b = False
if a:
    x = 5
    if b:
        y = 4
    else:
        y = 2
`;

const example3 = `# This program computes and returns the n'th Fibonacci number
n = 6
f0 = 0
f1 = 1
i = 0
while True:
    fi = f0 + f1
    f0 = f1
    f1 = fi
    i = i + 1
    if i >= n:
        break

f = f0
`;

module.exports = {
  example1,
  example2,
  example3,
}