const example1 = `pi = 3.1415
r = 8.0
circle_area = pi * r * r
circle_circum = pi * 2 * r
sphere_vol = (4.0 / 3.0) * pi * r * r * r
sphere_surf_area = 4 * pi * r * r
`;

const example2 = `a = True
b = False
x = 7
if a:
    x = 5
    if b:
        y = 4
    else:
        y = 2

z = (x * 3 * 7) / y

if z > 10:
    y = 5
`;

const example3 = `# This program computes and returns the n'th Fibonacci number.
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