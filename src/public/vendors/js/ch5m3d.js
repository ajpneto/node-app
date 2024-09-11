// ---------------------------------------------------------------------------
//
//                                  CH5M3D
//                              Version 1.2.5
//                          Written by Clarke Earley
//
// ---------------------------------------------------------------------------
//
//                            License Information
//
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// ---------------------------------------------------------------------------
function element(a, b) { if (typeof element.elem == "undefined") {
    element.elem = [];
    element.elem[0] = addElement(0, "X", "s", 0, 0, 0, 0, 0, 0, 0);
    element.elem[1] = addElement(1, "H", "s", 1, 1.0079, 31, 255, 255, 255, 2.2);
    element.elem[2] = addElement(2, "He", "s", 2, 4.0026, 28, 217, 255, 255, 0);
    element.elem[3] = addElement(3, "Li", "s", 1, 6.941, 128, 204, 128, 255, 0.98);
    element.elem[4] = addElement(4, "Be", "s", 2, 9.0122, 96, 194, 255, 0, 1.57);
    element.elem[5] = addElement(5, "B", "p", 3, 10.811, 84, 255, 181, 181, 2.04);
    element.elem[6] = addElement(6, "C", "p", 4, 12.0107, 76, 144, 144, 144, 2.55);
    element.elem[7] = addElement(7, "N", "p", 5, 14.0067, 71, 48, 80, 248, 3.04);
    element.elem[8] = addElement(8, "O", "p", 6, 15.9994, 66, 255, 13, 13, 3.44);
    element.elem[9] = addElement(9, "F", "p", 7, 18.9984, 57, 144, 224, 80, 3.98);
    element.elem[10] = addElement(10, "Ne", "p", 8, 20.1797, 58, 179, 227, 245, 0);
    element.elem[11] = addElement(11, "Na", "s", 1, 22.9897, 166, 171, 92, 242, 0.93);
    element.elem[12] = addElement(12, "Mg", "s", 2, 24.305, 141, 138, 255, 0, 1.31);
    element.elem[13] = addElement(13, "Al", "p", 3, 26.9815, 121, 191, 166, 166, 1.61);
    element.elem[14] = addElement(14, "Si", "p", 4, 28.0855, 111, 240, 200, 160, 1.9);
    element.elem[15] = addElement(15, "P", "p", 5, 30.9738, 107, 255, 128, 0, 2.19);
    element.elem[16] = addElement(16, "S", "p", 6, 32.065, 105, 255, 255, 48, 2.58);
    element.elem[17] = addElement(17, "Cl", "p", 7, 35.453, 102, 31, 240, 31, 3.16);
    element.elem[18] = addElement(18, "Ar", "p", 8, 39.948, 106, 128, 209, 227, 0);
    element.elem[19] = addElement(19, "K", "s", 1, 39.0983, 203, 143, 64, 212, 0.82);
    element.elem[20] = addElement(20, "Ca", "s", 2, 40.078, 176, 61, 255, 0, 1);
    element.elem[21] = addElement(21, "Sc", "d", 3, 44.9559, 170, 230, 230, 230, 1.36);
    element.elem[22] = addElement(22, "Ti", "d", 4, 47.867, 160, 191, 194, 199, 1.54);
    element.elem[23] = addElement(23, "V", "d", 5, 50.9415, 153, 166, 166, 171, 1.63);
    element.elem[24] = addElement(24, "Cr", "d", 6, 51.9961, 139, 138, 153, 199, 1.66);
    element.elem[25] = addElement(25, "Mn", "d", 7, 54.938, 139, 156, 122, 199, 1.55);
    element.elem[26] = addElement(26, "Fe", "d", 8, 55.845, 132, 224, 102, 51, 1.83);
    element.elem[27] = addElement(27, "Co", "d", 9, 58.9332, 126, 240, 144, 160, 1.88);
    element.elem[28] = addElement(28, "Ni", "d", 10, 58.6934, 124, 80, 208, 80, 1.91);
    element.elem[29] = addElement(29, "Cu", "d", 11, 63.546, 132, 200, 128, 51, 1.9);
    element.elem[30] = addElement(30, "Zn", "d", 2, 65.39, 122, 125, 128, 176, 1.65);
    element.elem[31] = addElement(31, "Ga", "p", 3, 69.723, 122, 194, 143, 143, 1.81);
    element.elem[32] = addElement(32, "Ge", "p", 4, 72.64, 120, 102, 143, 143, 2.01);
    element.elem[33] = addElement(33, "As", "p", 5, 74.9216, 119, 189, 128, 227, 2.18);
    element.elem[34] = addElement(34, "Se", "p", 6, 78.96, 120, 255, 161, 0, 2.55);
    element.elem[35] = addElement(35, "Br", "p", 7, 79.904, 120, 166, 41, 41, 2.96);
    element.elem[36] = addElement(36, "Kr", "p", 8, 83.8, 116, 92, 184, 209, 3);
    element.elem[37] = addElement(37, "Rb", "s", 1, 85.4678, 220, 112, 46, 176, 0.82);
    element.elem[38] = addElement(38, "Sr", "s", 2, 87.62, 195, 0, 255, 0, 0.95);
    element.elem[39] = addElement(39, "Y", "d", 3, 88.9059, 190, 148, 255, 255, 1.22);
    element.elem[40] = addElement(40, "Zr", "d", 4, 91.224, 175, 148, 224, 224, 1.33);
    element.elem[41] = addElement(41, "Nb", "d", 5, 92.9064, 164, 115, 194, 201, 1.6);
    element.elem[42] = addElement(42, "Mo", "d", 6, 95.94, 154, 84, 181, 181, 2.16);
    element.elem[43] = addElement(43, "Tc", "d", 7, 98, 147, 59, 158, 158, 1.9);
    element.elem[44] = addElement(44, "Ru", "d", 8, 101.07, 146, 36, 143, 143, 2.2);
    element.elem[45] = addElement(45, "Rh", "d", 9, 102.9055, 142, 10, 125, 140, 2.28);
    element.elem[46] = addElement(46, "Pd", "d", 10, 106.42, 139, 0, 105, 133, 2.2);
    element.elem[47] = addElement(47, "Ag", "d", 11, 107.8682, 145, 192, 192, 192, 1.93);
    element.elem[48] = addElement(48, "Cd", "d", 2, 112.411, 144, 255, 217, 143, 1.69);
    element.elem[49] = addElement(49, "In", "p", 3, 114.818, 142, 166, 117, 115, 1.78);
    element.elem[50] = addElement(50, "Sn", "p", 4, 118.71, 139, 102, 128, 128, 1.96);
    element.elem[51] = addElement(51, "Sb", "p", 5, 121.76, 139, 158, 99, 181, 2.05);
    element.elem[52] = addElement(52, "Te", "p", 6, 127.6, 138, 212, 122, 0, 2.1);
    element.elem[53] = addElement(53, "I", "p", 7, 126.9045, 139, 148, 0, 148, 2.66);
    element.elem[54] = addElement(54, "Xe", "p", 8, 131.293, 140, 66, 158, 176, 2.6);
    element.elem[55] = addElement(55, "Cs", "s", 1, 132.9055, 244, 87, 23, 143, 0.79);
    element.elem[56] = addElement(56, "Ba", "s", 2, 137.327, 215, 0, 201, 0, 0.89);
    element.elem[57] = addElement(57, "La", "d", 3, 138.9055, 207, 112, 212, 255, 1.1);
    element.elem[58] = addElement(58, "Ce", "f", 4, 140.116, 204, 255, 255, 199, 1.12);
    element.elem[59] = addElement(59, "Pr", "f", 5, 140.9077, 203, 217, 255, 199, 1.13);
    element.elem[60] = addElement(60, "Nd", "f", 6, 144.24, 201, 199, 255, 199, 1.14);
    element.elem[61] = addElement(61, "Pm", "f", 7, 145, 199, 163, 255, 199, 0);
    element.elem[62] = addElement(62, "Sm", "f", 8, 150.36, 198, 143, 255, 199, 1.17);
    element.elem[63] = addElement(63, "Eu", "f", 9, 151.964, 198, 97, 255, 199, 0);
    element.elem[64] = addElement(64, "Gd", "f", 10, 157.25, 196, 69, 255, 199, 1.2);
    element.elem[65] = addElement(65, "Tb", "f", 11, 158.9253, 194, 48, 255, 199, 0);
    element.elem[66] = addElement(66, "Dy", "f", 12, 162.5, 192, 31, 255, 199, 1.22);
    element.elem[67] = addElement(67, "Ho", "f", 13, 164.9303, 192, 0, 255, 156, 1.23);
    element.elem[68] = addElement(68, "Er", "f", 14, 167.259, 189, 0, 230, 117, 1.24);
    element.elem[69] = addElement(69, "Tm", "f", 15, 168.9342, 190, 0, 212, 82, 1.25);
    element.elem[70] = addElement(70, "Yb", "f", 16, 173.04, 187, 0, 191, 56, 0);
    element.elem[71] = addElement(71, "Lu", "f", 17, 174.967, 187, 0, 171, 36, 1.27);
    element.elem[72] = addElement(72, "Hf", "d", 4, 178.49, 175, 77, 194, 255, 1.3);
    element.elem[73] = addElement(73, "Ta", "d", 5, 180.9479, 170, 77, 166, 255, 1.5);
    element.elem[74] = addElement(74, "W", "d", 6, 183.84, 162, 33, 148, 214, 2.36);
    element.elem[75] = addElement(75, "Re", "d", 7, 186.207, 151, 38, 125, 171, 1.9);
    element.elem[76] = addElement(76, "Os", "d", 8, 190.23, 144, 38, 102, 150, 2.2);
    element.elem[77] = addElement(77, "Ir", "d", 9, 192.217, 141, 23, 84, 135, 2.2);
    element.elem[78] = addElement(78, "Pt", "d", 10, 195.078, 136, 208, 208, 224, 2.28);
    element.elem[79] = addElement(79, "Au", "d", 11, 196.9665, 136, 255, 209, 35, 2.54);
    element.elem[80] = addElement(80, "Hg", "d", 2, 200.59, 132, 184, 184, 208, 2);
    element.elem[81] = addElement(81, "Tl", "p", 3, 204.3833, 145, 166, 84, 77, 1.62);
    element.elem[82] = addElement(82, "Pb", "p", 4, 207.2, 146, 87, 89, 97, 2.33);
    element.elem[83] = addElement(83, "Bi", "p", 5, 208.9804, 148, 158, 79, 181, 2.02);
    element.elem[84] = addElement(84, "Po", "p", 6, 209, 140, 171, 92, 0, 2);
    element.elem[85] = addElement(85, "At", "p", 7, 210, 150, 117, 79, 69, 2.2);
    element.elem[86] = addElement(86, "Rn", "p", 8, 222, 150, 66, 130, 150, 0);
    element.elem[87] = addElement(87, "Fr", "s", 1, 223, 260, 66, 0, 102, 0.7);
    element.elem[88] = addElement(88, "Ra", "s", 2, 226, 221, 0, 125, 0, 0.9);
    element.elem[89] = addElement(89, "Ac", "d", 3, 227, 215, 112, 171, 250, 1.1);
    element.elem[90] = addElement(90, "Th", "f", 4, 232.0381, 206, 0, 186, 255, 1.3);
    element.elem[91] = addElement(91, "Pa", "f", 5, 231.0359, 200, 0, 161, 255, 1.5);
    element.elem[92] = addElement(92, "U", "f", 6, 238.0289, 196, 0, 143, 255, 1.38);
    element.elem[93] = addElement(93, "Np", "f", 7, 237, 190, 0, 128, 255, 1.36);
    element.elem[94] = addElement(94, "Pu", "f", 8, 244, 187, 0, 107, 255, 1.28);
    element.elem[95] = addElement(95, "Am", "f", 9, 243, 180, 84, 92, 242, 1.3);
    element.elem[96] = addElement(96, "Cm", "f", 10, 247, 169, 120, 92, 227, 1.3);
    element.elem[97] = addElement(97, "Bk", "f", 11, 247, 168, 138, 79, 227, 1.3);
    element.elem[98] = addElement(98, "Cf", "f", 12, 251, 168, 161, 54, 212, 1.3);
    element.elem[99] = addElement(99, "Es", "f", 13, 252, 165, 179, 31, 212, 1.3);
    element.elem[100] = addElement(100, "Fm", "f", 14, 257, 167, 179, 31, 186, 1.3);
    element.elem[101] = addElement(101, "Md", "f", 15, 258, 173, 179, 13, 166, 1.3);
    element.elem[102] = addElement(102, "No", "f", 16, 259, 176, 189, 13, 135, 1.3);
    element.elem[103] = addElement(103, "Lr", "f", 17, 262, 161, 199, 0, 102, 0);
    element.elem[104] = addElement(104, "Rf", "d", 4, 267, 157, 204, 0, 89, 0);
    element.elem[105] = addElement(105, "Db", "d", 5, 268, 149, 209, 0, 79, 0);
    element.elem[106] = addElement(106, "Sg", "d", 6, 269, 143, 217, 0, 69, 0);
    element.elem[107] = addElement(107, "Bh", "d", 7, 270, 141, 224, 0, 56, 0);
    element.elem[108] = addElement(108, "Hs", "d", 8, 269, 134, 230, 0, 46, 0);
    element.elem[109] = addElement(109, "Mt", "d", 9, 278, 129, 235, 0, 38, 0);
    element.elem[110] = addElement(110, "Ds", "d", 10, 281, 0, 0, 0, 28, 0);
    element.elem[111] = addElement(111, "Rg", "d", 11, 281, 0, 0, 0, 28, 0);
    element.elem[112] = addElement(112, "Cn", "d", 12, 285, 0, 0, 0, 28, 0);
    element.elem[113] = addElement(113, "Uut", "p", 3, 286, 0, 0, 0, 28, 0);
    element.elem[114] = addElement(114, "Fl", "p", 4, 289, 0, 0, 0, 28, 0);
    element.elem[115] = addElement(115, "Uup", "p", 5, 288, 0, 0, 0, 28, 0);
    element.elem[116] = addElement(116, "Lv", "p", 6, 293, 0, 0, 0, 28, 0);
    element.elem[117] = addElement(117, "Uus", "p", 7, 294, 0, 0, 0, 28, 0);
    element.elem[118] = addElement(118, "Uuo", "p", 8, 294, 0, 0, 0, 28, 0);
} if ((a < 0) || (a > element.elem.length)) {
    alert("Element " + a + " is not defined.");
    return 0;
} switch (b) {
    case "symbol":
        return element.elem[a].symbol;
        break;
    case "block":
        return element.elem[a].block;
        break;
    case "valence":
        return element.elem[a].valence;
        break;
    case "mass":
        return element.elem[a].mass;
        break;
    case "radius":
        return element.elem[a].radius;
        break;
    case "EN":
        return element.elem[a].EN;
        break;
    case "color":
        return element.elem[a].color;
        break;
    case "gradient":
        return element.elem[a].gradient;
        break;
    case "label":
        return element.elem[a].label;
        break;
    case "max":
        return element.elem.length;
        break;
    default:
        alert("Param " + b + " is not defined.");
        return 0;
        break;
} }
function elementObject() { this.symbol = "?"; this.block = "?"; this.valence = 0; this.mass = 0; this.radius = 0; this.EN = 0; this.color = "rgb(88,88,88)"; this.gradient = "rgb(88,88,88)"; this.label = "rgb(255,255,255)"; }
function addElement(a, h, d, b, m, k, c, e, n, l) { var o, g; var f = new elementObject(); f.symbol = h; f.block = d; f.valence = b; f.mass = m; (k <= 0) ? o = 0.1 : o = k / 100; f.radius = o; f.color = "rgb(" + c + "," + e + "," + n + ")"; f.gradient = "rgb(" + Math.floor(c / 2) + "," + Math.floor(e / 2) + "," + Math.floor(n / 2) + ")"; g = c + e + n; f.label = (g > 384) ? "rgb(0,0,0)" : "rgb(255,255,255)"; f.EN = l; return f; }
function drawPeriodic() { var b; var c = "ptable"; b = "<table><tr>"; b += '<td class="main" id="mH"  onclick="pickElem(\'H\');">H</td>'; b += '<td class="Row"  id="Row1" colspan="12">&nbsp;</td>'; b += '<td class="plabel" id="plabel" colspan="4" onclick="pickElem(\'PView\');">'; b += '<div id="pchooser">Metals</div></td>'; b += '<td class="metl" id="pHe" onclick="pickElem(\'He\');">He</td>'; b += "</tr>\n"; b += "<tr>"; b += '<td class="metl" id="pLi" onclick="pickElem(\'Li\');">Li</td>'; b += '<td class="metl" id="pBe" onclick="pickElem(\'Be\');">Be</td>'; b += '<td class="Row"  id="Row2" colspan="10">&nbsp;</td>'; b += '<td class="main" id="mB"  onclick="pickElem(\'B\');">B</td>'; b += '<td class="main" id="mC"  onclick="pickElem(\'C\');">C</td>'; b += '<td class="main" id="mN"  onclick="pickElem(\'N\');">N</td>'; b += '<td class="main" id="mO"  onclick="pickElem(\'O\');">O</td>'; b += '<td class="main" id="mF"  onclick="pickElem(\'F\');">F</td>'; b += '<td class="metl" id="pNe" onclick="pickElem(\'Ne\');">Ne</td>'; b += "</tr>\n"; b += "<tr>"; b += '<td class="metl" id="pNa" onclick="pickElem(\'Na\');">Na</td>'; b += '<td class="metl" id="pMg" onclick="pickElem(\'Mg\');">Mg</td>'; b += '<td class="Row"  id="Row3" colspan="10">&nbsp;</td>'; b += '<td class="main" id="mAl" onclick="pickElem(\'Al\')">Al</td>'; b += '<td class="main" id="mSi" onclick="pickElem(\'Si\')">Si</td>'; b += '<td class="main" id="mP"  onclick="pickElem(\'P\')">P</td>'; b += '<td class="main" id="mS"  onclick="pickElem(\'S\')">S</td>'; b += '<td class="main" id="mCl" onclick="pickElem(\'Cl\')">Cl</td>'; b += '<td class="metl" id="pAr" onclick="pickElem(\'Ar\')">Ar</td>'; b += "</tr>\n"; b += "<tr>"; b += '<td class="metl" id="pK"  onclick="pickElem(\'K\')">K</td>'; b += '<td class="metl" id="pCa" onclick="pickElem(\'Ca\')">Ca</td>'; b += '<td class="metl" id="pSc" onclick="pickElem(\'Sc\')">Sc</td>'; b += '<td class="metl" id="pTi" onclick="pickElem(\'Ti\')">Ti</td>'; b += '<td class="metl" id="pV"  onclick="pickElem(\'V\')">V</td>'; b += '<td class="metl" id="pCr" onclick="pickElem(\'Cr\')">Cr</td>'; b += '<td class="metl" id="pMn" onclick="pickElem(\'Mn\')">Mn</td>'; b += '<td class="metl" id="pFe" onclick="pickElem(\'Fe\')">Fe</td>'; b += '<td class="metl" id="pCo" onclick="pickElem(\'Co\')">Co</td>'; b += '<td class="metl" id="pNi" onclick="pickElem(\'Ni\')">Ni</td>'; b += '<td class="metl" id="pCu" onclick="pickElem(\'Cu\')">Cu</td>'; b += '<td class="metl" id="pZn" onclick="pickElem(\'Zn\')">Zn</td>'; b += '<td class="main" id="mGa" onclick="pickElem(\'Ga\')">Ga</td>'; b += '<td class="main" id="mGe" onclick="pickElem(\'Ge\')">Ge</td>'; b += '<td class="main" id="mAs" onclick="pickElem(\'As\')">As</td>'; b += '<td class="main" id="mSe" onclick="pickElem(\'Se\')">Se</td>'; b += '<td class="main" id="mBr" onclick="pickElem(\'Br\')">Br</td>'; b += '<td class="metl" id="pKr" onclick="pickElem(\'Kr\')">Kr</td>'; b += "</tr>\n"; b += "<tr>"; b += '<td class="metl" id="pRb" onclick="pickElem(\'Rb\')">Rb</td>'; b += '<td class="metl" id="pSr" onclick="pickElem(\'Sr\')">Sr</td>'; b += '<td class="metl" id="pY"  onclick="pickElem(\'Y\')">Y</td>'; b += '<td class="metl" id="pZr" onclick="pickElem(\'Zr\')">Zr</td>'; b += '<td class="metl" id="pNb" onclick="pickElem(\'Nb\')">Nb</td>'; b += '<td class="metl" id="pMo" onclick="pickElem(\'Mo\')">Mo</td>'; b += '<td class="metl" id="pTc" onclick="pickElem(\'Tc\')">Tc</td>'; b += '<td class="metl" id="pRu" onclick="pickElem(\'Ru\')">Ru</td>'; b += '<td class="metl" id="pRh" onclick="pickElem(\'Rh\')">Rh</td>'; b += '<td class="metl" id="pPd" onclick="pickElem(\'Pd\')">Pd</td>'; b += '<td class="metl" id="pAg" onclick="pickElem(\'Ag\')">Ag</td>'; b += '<td class="metl" id="pCd" onclick="pickElem(\'Cd\')">Cd</td>'; b += '<td class="main" id="mIn" onclick="pickElem(\'In\')">In</td>'; b += '<td class="main" id="mSn" onclick="pickElem(\'Sn\')">Sn</td>'; b += '<td class="main" id="mSb" onclick="pickElem(\'Sb\')">Sb</td>'; b += '<td class="main" id="mTe" onclick="pickElem(\'Te\')">Te</td>'; b += '<td class="main" id="mI"  onclick="pickElem(\'I\')">I</td>'; b += '<td class="metl" id="pXe" onclick="pickElem(\'Xe\')">Xe</td>'; b += "</tr>\n"; b += "<tr>"; b += '<td class="metl" id="pCs" onclick="pickElem(\'Cs\')">Cs</td>'; b += '<td class="metl" id="pBa" onclick="pickElem(\'Ba\')">Ba</td>'; b += '<td class="metl" id="pLa" onclick="pickElem(\'La\')">La</td>'; b += '<td class="metl" id="pHf" onclick="pickElem(\'Hf\')">Hf</td>'; b += '<td class="metl" id="pTa" onclick="pickElem(\'Ta\')">Ta</td>'; b += '<td class="metl" id="pW"  onclick="pickElem(\'W\')">W</td>'; b += '<td class="metl" id="pRe" onclick="pickElem(\'Re\')">Re</td>'; b += '<td class="metl" id="pOs" onclick="pickElem(\'Os\')">Os</td>'; b += '<td class="metl" id="pIr" onclick="pickElem(\'Ir\')">Ir</td>'; b += '<td class="metl" id="pPt" onclick="pickElem(\'Pt\')">Pt</td>'; b += '<td class="metl" id="pAu" onclick="pickElem(\'Au\')">Au</td>'; b += '<td class="metl" id="pHg" onclick="pickElem(\'Hg\')">Hg</td>'; b += '<td class="main" id="mTl" onclick="pickElem(\'Tl\')">Tl</td>'; b += '<td class="main" id="mPb" onclick="pickElem(\'Pb\')">Pb</td>'; b += '<td class="main" id="mBi" onclick="pickElem(\'Bi\')">Bi</td>'; b += '<td class="main" id="mPo" onclick="pickElem(\'Po\')">Po</td>'; b += '<td class="main" id="mAt" onclick="pickElem(\'At\')">At</td>'; b += '<td class="metl" id="pRn" onclick="pickElem(\'Rn\')">Rn</td>'; b += "</tr>\n"; b += "<tr>"; b += '<td class="metl" id="pFr"  onclick="pickElem(\'Fr\')">Fr</td>'; b += '<td class="metl" id="pRa"  onclick="pickElem(\'Ra\')">Ra</td>'; b += '<td class="metl" id="pAc"  onclick="pickElem(\'Ac\')">Ac</td>'; b += '<td class="metl" id="pRf"  onclick="pickElem(\'Rf\')">Rf</td>'; b += '<td class="metl" id="pDb"  onclick="pickElem(\'Db\')">Db</td>'; b += '<td class="metl" id="pSg"  onclick="pickElem(\'Sg\')">Sg</td>'; b += '<td class="metl" id="pBh"  onclick="pickElem(\'Bh\')">Bh</td>'; b += '<td class="metl" id="pHs"  onclick="pickElem(\'Hs\')">Hs</td>'; b += '<td class="metl" id="pMt"  onclick="pickElem(\'Mt\')">Mt</td>'; b += '<td class="metl" id="pDs"  onclick="pickElem(\'Ds\')">Ds</td>'; b += '<td class="metl" id="pRg"  onclick="pickElem(\'Rg\')">Rg</td>'; b += '<td class="metl" id="pCn"  onclick="pickElem(\'Cn\')">Cn</td>'; b += '<td class="metl" id="pUut" onclick="pickElem(\'Uut\')">Uut</td>'; b += '<td class="metl" id="pFl"  onclick="pickElem(\'Fl\')">Fl</td>'; b += '<td class="metl" id="pUup" onclick="pickElem(\'Uup\')">Uup</td>'; b += '<td class="metl" id="pLv"  onclick="pickElem(\'Lv\')">Lv</td>'; b += '<td class="metl" id="pUus" onclick="pickElem(\'Uus\')">Uus</td>'; b += '<td class="metl" id="pUuo" onclick="pickElem(\'Uuo\')">Uuo</td>'; b += "</tr>\n"; b += "<tr>"; b += '<td class="Row"  id="RowLa" colspan="2">&nbsp;</td>'; b += '<td class="metl" id="pCe" onclick="pickElem(\'Ce\')">Ce</td>'; b += '<td class="metl" id="pPr" onclick="pickElem(\'Pr\')">Pr</td>'; b += '<td class="metl" id="pNd" onclick="pickElem(\'Nd\')">Nd</td>'; b += '<td class="metl" id="pPm" onclick="pickElem(\'Pm\')">Pm</td>'; b += '<td class="metl" id="pSm" onclick="pickElem(\'Sm\')">Sm</td>'; b += '<td class="metl" id="pEu" onclick="pickElem(\'Eu\')">Eu</td>'; b += '<td class="metl" id="pGd" onclick="pickElem(\'Gd\')">Gd</td>'; b += '<td class="metl" id="pTb" onclick="pickElem(\'Tb\')">Tb</td>'; b += '<td class="metl" id="pDy" onclick="pickElem(\'Dy\')">Dy</td>'; b += '<td class="metl" id="pHo" onclick="pickElem(\'Ho\')">Ho</td>'; b += '<td class="metl" id="pEr" onclick="pickElem(\'Er\')">Er</td>'; b += '<td class="metl" id="pTm" onclick="pickElem(\'Tm\')">Tm</td>'; b += '<td class="metl" id="pYb" onclick="pickElem(\'Yb\')">Yb</td>'; b += '<td class="metl" id="pLu" onclick="pickElem(\'Lu\')">Lu</td>'; b += '<td class="Row"  id="RowLa2" colspan="2">&nbsp;</td>'; b += "</tr>\n"; b += "<tr>"; b += '<td class="Row"  id="RowAc" colspan="2">&nbsp;</td>'; b += '<td class="metl" id="pTh" onclick="pickElem(\'Th\')">Th</td>'; b += '<td class="metl" id="pPa" onclick="pickElem(\'Pa\')">Pa</td>'; b += '<td class="metl" id="pU"  onclick="pickElem(\'U\')" >U</td>'; b += '<td class="metl" id="pNp" onclick="pickElem(\'Np\')">Np</td>'; b += '<td class="metl" id="pPu" onclick="pickElem(\'Pu\')">Pu</td>'; b += '<td class="metl" id="pAm" onclick="pickElem(\'Am\')">Am</td>'; b += '<td class="metl" id="pCm" onclick="pickElem(\'Cm\')">Cm</td>'; b += '<td class="metl" id="pBk" onclick="pickElem(\'Bk\')">Bk</td>'; b += '<td class="metl" id="pCf" onclick="pickElem(\'Cf\')">Cf</td>'; b += '<td class="metl" id="pEs" onclick="pickElem(\'Es\')">Es</td>'; b += '<td class="metl" id="pFm" onclick="pickElem(\'Fm\')">Fm</td>'; b += '<td class="metl" id="pMd" onclick="pickElem(\'Md\')">Md</td>'; b += '<td class="metl" id="pNo" onclick="pickElem(\'No\')">No</td>'; b += '<td class="metl" id="pLr" onclick="pickElem(\'Lr\')">Lr</td>'; b += '<td class="Row"  id="RowAc2" colspan="2">&nbsp;</td>'; b += "</tr></table>\n"; var a = document.getElementById(c); if (a) {
    a.innerHTML = b;
} }
function Mol(a) { var c; var b = a || 0; if (typeof Mol.molecule === "undefined") {
    Mol.molecule = 1;
} if (b > 0) {
    Mol.molecule = b;
    BondMatrix(b);
} c = Mol.molecule; if (typeof Mol.moly === "undefined") {
    Mol.moly = [];
} if (typeof Mol.moly[c] === "undefined") {
    Mol.moly[c] = [];
    Mol.moly[c][0] = new molObject();
    Mol.moly[c][0].molIndex = c;
    Mol.moly[c][0].numatoms = 0;
    Mol.moly[c][0].AtomScale = 1;
    Mol.moly[c][0].showlabels = 0;
    Mol.moly[c][0].showcharges = 0;
    Mol.moly[c][0].gradients = 1;
    Mol.moly[c][0].highlite = 0;
    Mol.moly[c][0].formula = "";
    Mol.moly[c][0].weight = 0;
    Mol.moly[c][0].charge = 999;
} return Mol.moly[c]; }
function BondMatrix(a) { var c; var b = a || 0; if (typeof BondMatrix.id === "undefined") {
    BondMatrix.id = 1;
} if (b > 0) {
    BondMatrix.id = b;
} c = BondMatrix.id; if (typeof BondMatrix.bonds === "undefined") {
    BondMatrix.bonds = [];
} if (typeof BondMatrix.bonds[c] === "undefined") {
    BondMatrix.bonds[c] = [];
} return BondMatrix.bonds[c]; }
function activeWin(b) { var d, e; var f = b || " "; if (typeof activeWin.mol === "undefined") {
    activeWin.mol = [];
    activeWin.mol[0] = "Dummy";
} if (typeof activeWin.win === "undefined") {
    var a = document.getElementsByTagName("canvas");
    if (a[0]) {
        activeWin.win = a[0].id;
        activeWin.mol[1] = activeWin.win;
    }
    else {
        return;
    }
} if (f.length > 1) {
    activeWin.win = f;
} e = -1; for (d = 0; d < activeWin.mol.length; d++) {
    if (activeWin.mol[d] == activeWin.win) {
        e = d;
    }
} if (e < 0) {
    e = activeWin.mol.length;
    activeWin.mol[e] = activeWin.win;
} Mol(e); var c = document.getElementById(activeWin.win); if (c) {
    c.onmousedown = MouseDown;
    document.onmouseup = MouseUp;
    c.onmousemove = MouseMove;
    c.addEventListener("mousewheel", MouseWheel, false);
    c.addEventListener("DOMMouseScroll", MouseWheel, false);
    c.addEventListener("touchstart", MouseDown);
    c.addEventListener("touchend", MouseUp);
    c.addEventListener("touchmove", MouseMove);
} return activeWin.win; }
function atomObject() { this.atomicnumber = 0; this.x = 0; this.y = 0; this.z = 0; this.charge = 0; this.highlite = 0; }
function molObject() { this.molIndex = 1; this.numatoms = 0; this.AtomScale = 1; this.showlabels = 1; this.showcharges = 0; this.gradients = 1; this.highlite = 0; this.hide = 0; this.formula = ""; this.weight = 0; this.charge = 999; }
function readXYZfile(t) { var d, c, m; var b, n, l, k; var s, q, o, a; var p; var g; var f = new Array(); var h = new Array(); var e = Mol(); delMolecule(); InfoWin("", 1); m = parseInt(t[0].replace(/\s+/, "")); if (isNaN(m)) {
    InfoWin("*** ERROR Reading XYZ file. ***\n");
    return;
} h = t[1]; h = h.replace(/\s+$/, ""); InfoWin(h + "\n"); InfoWin("Looking for " + m + " atoms.\n"); for (d = 2; d < (m + 2); d++) {
    f = t[d].replace(/\s+/g, " ").replace(/^\s+/, "").split(" ");
    b = lookupSymbol(f[0]);
    if ((b < 1) || (b > 118)) {
        InfoWin("*** ERROR Reading XYZ file. ***\n");
        return;
    }
    n = parseFloat(f[1]);
    l = parseFloat(f[2]);
    k = parseFloat(f[3]);
    addAtom(b, n, l, k);
    InfoWin(" " + f[0] + "(" + b + ")  " + n + ", " + l + ", " + k + "\n");
} for (d = 1; d < m; d++) {
    for (c = d + 1; c <= m; c++) {
        p = 1.2 * (element(e[d].atomicnumber, "radius") + element(e[c].atomicnumber, "radius"));
        s = e[d].x - e[c].x;
        q = e[d].y - e[c].y;
        o = e[d].z - e[c].z;
        a = Math.sqrt(s * s + q * q + o * o);
        if (a <= p) {
            addBond(d, c);
        }
    }
} formula(); InfoWin("Finished reading XYZ input file.\n"); }
function readMOLfile(a, s) { var f, e; var o, n, m; var h, g; var c, d; var l = new Array(); var k = Mol(); var p = escape(a.name); InfoWin("File Name = " + p, 1); InfoWin("\nFile Type = " + a.type); InfoWin("\nFile Size = " + a.size); delMolecule(); l = s[0]; l = l.replace(/\s+$/, ""); var q = parseFloat(s[3].substr(0, 3)); var b = parseFloat(s[3].substr(3, 3)); InfoWin("\n\n" + l); InfoWin("\n" + q + " atoms and " + b + " bonds."); e = q + 4; for (f = 4; f < e; f++) {
    o = parseFloat(s[f].substr(0, 10));
    n = parseFloat(s[f].substr(10, 10));
    m = parseFloat(s[f].substr(20, 10));
    d = s[f].substr(31, 3);
    d = d.replace(/\s+/, "");
    c = lookupSymbol(d);
    InfoWin("\n   " + d + "(" + c + ")  " + o + ", " + n + ", " + m);
    addAtom(c, o, n, m);
} e = 4 + q + b; for (f = 4 + q; f < e; f++) {
    h = parseFloat(s[f].substr(0, 3));
    g = parseFloat(s[f].substr(3, 3));
    InfoWin("\n   Bond from " + h + " to " + g);
    addBond(h, g);
} formula(); }
function readINPfile(o) { var d, c; var n, l, k; var f, e; var a, b; var m; var h = new Array(); var g = Mol(); InfoWin("--- Reading Gamess input file ---\n", 1); delMolecule(); d = 0; o[d].toLowerCase(); while (o[d].toLowerCase().indexOf("$data") < 0) {
    d++;
} d++; h = o[d]; h = h.replace(/\s+$/, ""); InfoWin("\n\nTitle: [" + h + "]\n"); d++; if (o[d].toLowerCase().indexOf("c1") < 0) {
    d++;
} d++; while (o[d].toLowerCase().indexOf("$end") < 0) {
    InfoWin("   Line = [" + o[d] + "]\n");
    current = o[d].replace(/\s+/g, " ").replace(/^\s+/, "").split(" ");
    a = parseInt(current[1]);
    n = parseFloat(current[2]);
    l = parseFloat(current[3]);
    k = parseFloat(current[4]);
    addAtom(a, n, l, k);
    d++;
} for (d = 1; d < g[0].numatoms; d++) {
    ra = element(g[d].atomicnumber, "radius");
    for (c = d + 1; c <= g[0].numatoms; c++) {
        rb = element(g[d].atomicnumber, "radius");
        r = 0.9 * distance(g, d, c);
        if (r <= (ra + rb)) {
            addBond(d, c);
        }
    }
} InfoWin("Finished reading input file.\n"); formula(); return; }
function lookupSymbol(b) { var a; for (a = 1; a < element(1, "max"); a++) {
    if (element(a, "symbol") == b) {
        return a;
    }
} return 0; }
function delMolecule() { var a = Mol(); a[0] = new molObject(); a[0].molIndex = 1; a[0].numatoms = 0; a[0].AtomScale = 1; a[0].showlabels = 0; a[0].showcharges = 0; buttonColor("ChargeButton", 0); }
function Undo(d) { var b, g; var f; var e = 10; var a = Mol(); var c = BondMatrix(); if (typeof Undo.num == "undefined") {
    Undo.num = 0;
    Undo.mol = [];
    Undo.bonds = [];
    for (b = 0; b < e; b++) {
        Undo.mol[b] = [];
        Undo.mol[b][0] = 0;
        Undo.bonds[b] = [];
    }
} if (d == "save") {
    g = Undo.num;
    Undo.mol[g] = null;
    Undo.mol[g] = [];
    Undo.mol[g][0] = a[0].numatoms;
    for (b = 1; b <= a[0].numatoms; b++) {
        Undo.mol[g][b] = new atomObject();
        Undo.mol[g][b].atomicnumber = a[b].atomicnumber;
        Undo.mol[g][b].x = a[b].x;
        Undo.mol[g][b].y = a[b].y;
        Undo.mol[g][b].z = a[b].z;
        Undo.mol[g][b].bonds = [];
        Undo.mol[g][b].charge = a[b].charge;
        Undo.mol[g][b].highlite = a[b].highlite;
    }
    Undo.bonds[g] = null;
    Undo.bonds[g] = [];
    for (b = 1; b <= a[0].numatoms; b++) {
        Undo.bonds[g][b] = [];
        for (j = 0; j <= a[0].numatoms; j++) {
            Undo.bonds[g][b][j] = c[b][j];
        }
    }
    Undo.num = ((Undo.num + 1) % e);
    return;
} if (d == "pop") {
    Undo("save");
    g = ((Undo.num + e - 2) % e);
    Undo.num = g;
    if (Undo.mol[g][0] < 1) {
        alert("ERROR: No saved coordinates to restore.");
        return;
    }
} if (d == "redo") {
    g = ((Undo.num + 1) % e);
    Undo.num = g;
    if (Undo.mol[g][0] < 1) {
        alert("ERROR: No saved coordinates to restore.");
        return;
    }
} if ((d == "redo") || (d == "pop")) {
    a[0].numatoms = Undo.mol[g][0];
    for (b = 1; b <= Undo.mol[g][0]; b++) {
        a[b].atomicnumber = Undo.mol[g][b].atomicnumber;
        a[b].x = Undo.mol[g][b].x;
        a[b].y = Undo.mol[g][b].y;
        a[b].z = Undo.mol[g][b].z;
        a[b].charge = Undo.mol[g][b].charge;
        a[b].highlite = Undo.mol[g][b].highlite;
    }
    for (b = 1; b <= a[0].numatoms; b++) {
        for (j = 0; j <= a[0].numatoms; j++) {
            c[b][j] = Undo.bonds[g][b][j];
        }
    }
    centerMolecule();
    drawMolecule();
    return;
} }
function addAtom(h, b, g, f) { var c; var e; var a = Mol(); var d = BondMatrix(); a[0].numatoms++; e = a[0].numatoms; a[0].showcharges = 0; buttonColor("ChargeButton", 0); a[e] = new atomObject(); a[e].atomicnumber = h; a[e].x = b; a[e].y = g; a[e].z = f; a[e].charge = 0; a[e].highlite = 0; if (typeof d[e] === "undefined") {
    d[e] = [];
} d[e][0] = 0; for (c = 1; c <= e; c++) {
    d[c][e] = 0;
    d[e][c] = 0;
} }
function addBond(c, b) { var e, d; var h; var a = Mol(); var g = a[0].numatoms; var f = BondMatrix(); f[c][0]++; f[c][b] = 1; f[b][0]++; f[b][c] = 1; }
function delAtom(o) { var l, g, c, f = 0; var t, d; var s; var h, e, n, b, a; var q = new Array(); var m = Mol(); var p = BondMatrix(); m[0].showcharges = 0; buttonColor("ChargeButton", 0); h = o; for (l = 1; l < o; l++) {
    if ((p[o][l] > 0) && (m[l].atomicnumber == 1)) {
        q[f++] = l;
        h--;
    }
} for (l = o + 1; l <= m[0].numatoms; l++) {
    if ((p[o][l] > 0) && (m[l].atomicnumber == 1)) {
        q[f++] = l;
    }
} q.sort(function (u, k) { return (k - u); }); for (l = 0; l < f; l++) {
    delAtom(q[l]);
} o = h; for (l = o; l < m[0].numatoms; l++) {
    g = l + 1;
    m[l].atomicnumber = m[g].atomicnumber;
    m[l].x = m[g].x;
    m[l].y = m[g].y;
    m[l].z = m[g].z;
    m[l].charge = m[g].charge;
    m[l].highlite = m[g].highlite;
} m[0].numatoms--; s = m[0].numatoms; for (l = 1; l < o; l++) {
    if (p[l][o] > 0) {
        p[l][0]--;
    }
    for (g = o; g <= s; g++) {
        p[l][g] = p[l][g + 1];
    }
    p[l][s + 1] = 0;
} for (l = o; l <= s; l++) {
    if (p[l + 1][o] > 0) {
        p[l + 1][0]--;
    }
    for (g = 0; g < o; g++) {
        p[l][g] = p[l + 1][g];
    }
    for (g = o; g <= s; g++) {
        p[l][g] = p[l + 1][g + 1];
    }
    p[l][s + 1] = 0;
} for (l = 0; l <= s + 1; l++) {
    p[s + 1][l] = 0;
} drawMolecule(); }
function delBond(b, a) { var c, e; var d = BondMatrix(); if (d[b][a] > 0) {
    d[b][a] = 0;
    d[b][0]--;
} if (d[a][b] > 0) {
    d[a][b] = 0;
    d[a][0]--;
} }
function hideH() { var b; var a = Mol(); for (b = 1; b <= a[0].numatoms; b++) {
    if (a[b].atomicnumber == 1) {
        a[b].hide = 1;
    }
} drawMolecule(); }
function showAll() { var b; var a = Mol(); for (b = 1; b < a[0].numatoms; b++) {
    a[b].hide = 0;
} }
function centerMolecule() { var e, c, k; var a = 0; var n, g, d; var h; var m = activeWin(""); var f = Mol(); var b = document.getElementById(m); var l = b.height; n = 0; g = 0; d = 0; k = f[0].numatoms; for (e = 1; e <= k; e++) {
    n += f[e].x;
    g += f[e].y;
    d += f[e].z;
} n /= k; g /= k; d /= k; a = 0; for (e = 1; e <= k; e++) {
    c = f[e].atomicnumber;
    f[e].x -= n;
    f[e].y -= g;
    f[e].z -= d;
    h = Math.abs(f[e].x);
    h = Math.max(h, Math.abs(f[e].y));
    h = Math.max(h, Math.abs(f[e].z));
    h += element(c, "radius");
    a = Math.max(a, h);
} f[0].AtomScale = 0.5 * l / a; }
function showGlobal() { var b; var a = Mol(); InfoWin("numatoms = " + a[0].numatoms, 1); InfoWin("\nAtomScale = " + a[0].AtomScale.toFixed(6)); InfoWin("\n"); for (b = 1; b <= a[0].numatoms; b++) {
    A = a[b].atomicnumber;
    InfoWin(b + "  " + element(A, "symbol"));
    InfoWin(" (" + a[b].x.toFixed(4));
    InfoWin(", " + a[b].y.toFixed(4));
    InfoWin(", " + a[b].z.toFixed(4));
    InfoWin(")\n");
} }
function showCoord(e) { var b; var c; var a = Mol(); var d = BondMatrix(); if (a[0].weight <= 0) {
    return;
} if (e) {
    InfoWin("Molecular Coordinates and Bond Information\n", 1);
    InfoWin("   " + a[0].formula + "  (" + a[0].weight.toFixed(2) + " g/mol)");
    if ((a[0].charge != 999) && (a[0].charge != 0)) {
        InfoWin("   Charge = " + a[0].charge);
    }
    InfoWin("\n");
}
else {
    InfoWin("Molecular Coordinates in .xyz format\n", 1);
    InfoWin("--------------------\n");
    InfoWin(a[0].numatoms + "\n");
    InfoWin(a[0].formula + "  (" + a[0].weight.toFixed(2) + " g/mol) in xyz format: From CH5M3D\n");
} for (b = 1; b <= a[0].numatoms; b++) {
    c = "";
    if (b < 100) {
        c = " ";
    }
    if (b < 10) {
        c = "  ";
    }
    if (e) {
        InfoWin(c + b + ": ");
    }
    InfoWin(element(a[b].atomicnumber, "symbol") + " ");
    if (element(a[b].atomicnumber, "symbol").length < 2) {
        InfoWin(" ");
    }
    InfoWin(XYZpretty(a[b].x));
    InfoWin(XYZpretty(a[b].y));
    InfoWin(XYZpretty(a[b].z));
    if (e) {
        InfoWin("  ");
        for (j = 1; j <= a[0].numatoms; j++) {
            if (d[b][j] > 0) {
                InfoWin("  " + j + ",");
            }
        }
    }
    InfoWin("\n");
} }
function XYZpretty(c) { var b = "    "; var a = new Array(); if (c >= 100) {
    a = b + " " + c.toFixed(4);
    return a;
} if (c >= 10) {
    a = b + "  " + c.toFixed(4);
    return a;
} if (c >= 0) {
    a = b + "   " + c.toFixed(4);
    return a;
} if (c >= -10) {
    a = b + "  " + c.toFixed(4);
    return a;
} if (c >= -100) {
    a = b + " " + c.toFixed(4);
    return a;
} a = b + c.toFixed(4); return a; }
function formula() { var d, c, a; var h, e; var b; var k = new Array(); var g = "<p>Formula = "; var f = Mol(); if (f[0].numatoms < 1) {
    return;
} e = 0; for (d = 1; d <= f[0].numatoms; d++) {
    if (f[d].atomicnumber == 6) {
        k[e] = [];
        k[e][0] = 6;
        k[e][1] = 0;
        e++;
        d = f[0].numatoms + 1;
    }
} for (d = 1; d <= f[0].numatoms; d++) {
    if (f[d].atomicnumber == 1) {
        k[e] = [];
        k[e][0] = 1;
        k[e][1] = 0;
        e++;
        d = f[0].numatoms + 1;
    }
} for (d = 1; d <= f[0].numatoms; d++) {
    a = f[d].atomicnumber;
    h = 0;
    for (c = 0; c < e; c++) {
        if (k[c][0] == a) {
            k[c][1]++;
            h = 1;
            c = e;
        }
    }
    if (h == 0) {
        k[e] = new Array(2);
        k[e][0] = f[d].atomicnumber;
        k[e][1] = 1;
        e++;
    }
} b = 0; f[0].formula = ""; for (d = 0; d < e; d++) {
    a = k[d][0];
    b += element(a, "mass") * k[d][1];
    g += element(a, "symbol");
    f[0].formula += element(a, "symbol");
    if (k[d][1] > 1) {
        g += "<sub>" + k[d][1] + "</sub>";
        f[0].formula += k[d][1] + " ";
    }
} g += "</p>"; f[0].weight = b; if (document.getElementById("formula")) {
    document.getElementById("formula").innerHTML = g;
} if (b > 0) {
    InfoWin(f[0].formula + " has a molecular weight of " + b.toFixed(2) + "\n");
} }
function RotateMolecule(b) { var a = 20; b = b[0].toLowerCase(); if ((b != "x") && (b != "y") && (b != "z") && (b != "s")) {
    return;
} if (typeof RotateMolecule.RX === "undefined") {
    RotateMolecule.RX = 0;
    RotateMolecule.RY = 0;
    RotateMolecule.RZ = 0;
} switch (b) {
    case "x":
        if (RotateMolecule.RX == 0) {
            RotateMolecule.RX = 1;
            RotateX_ID = setInterval("rotateX()", a);
            buttonColor("rotateX", 1);
        }
        else {
            RotateMolecule.RX = 0;
            clearInterval(RotateX_ID);
            buttonColor("rotateX", 0);
        }
        break;
    case "y":
        if (RotateMolecule.RY == 0) {
            RotateMolecule.RY = 1;
            RotateY_ID = setInterval("rotateY()", a);
            buttonColor("rotateY", 1);
        }
        else {
            RotateMolecule.RY = 0;
            clearInterval(RotateY_ID);
            buttonColor("rotateY", 0);
        }
        break;
    case "z":
        if (RotateMolecule.RZ == 0) {
            RotateMolecule.RZ = 1;
            RotateZ_ID = setInterval("rotateZ()", a);
            buttonColor("rotateZ", 1);
        }
        else {
            RotateMolecule.RZ = 0;
            clearInterval(RotateZ_ID);
            buttonColor("rotateZ", 0);
        }
        break;
    case "s":
        if (RotateMolecule.RX != 0) {
            RotateMolecule.RX = 0;
            clearInterval(RotateX_ID);
        }
        if (RotateMolecule.RY != 0) {
            RotateMolecule.RY = 0;
            clearInterval(RotateY_ID);
        }
        if (RotateMolecule.RZ != 0) {
            RotateMolecule.RZ = 0;
            clearInterval(RotateZ_ID);
        }
        buttonColor("rotateX", 0);
        buttonColor("rotateY", 0);
        buttonColor("rotateZ", 0);
        break;
} }
function rotateX() { var c, b, h, g; var f = 1; var e = Math.cos(-f * Math.PI / 180); var d = Math.sin(-f * Math.PI / 180); var a = Mol(); for (c = 1; c <= a[0].numatoms; c++) {
    h = a[c].y;
    g = a[c].z;
    a[c].y = e * h + d * g;
    a[c].z = -d * h + e * g;
} drawMolecule(); }
function rotateY() { var c, b, h, g; var f = 1; var e = Math.cos(-f * Math.PI / 180); var d = Math.sin(-f * Math.PI / 180); var a = Mol(); for (c = 1; c <= a[0].numatoms; c++) {
    b = a[c].x;
    g = a[c].z;
    a[c].x = e * b + d * g;
    a[c].z = -d * b + e * g;
} drawMolecule(); }
function rotateZ() { var c, b, h, g; var f = 1; var e = Math.cos(-f * Math.PI / 180); var d = Math.sin(-f * Math.PI / 180); var a = Mol(); for (c = 1; c <= a[0].numatoms; c++) {
    b = a[c].x;
    h = a[c].y;
    a[c].x = e * b + d * h;
    a[c].y = -d * b + e * h;
} drawMolecule(); }
function drawMolecule() { var C, B, z; var l, g, n; var m = BondMatrix(); var h = Mol(); var q, F = h[0].numatoms; var e, p; var E, b, D, a; var t = 0.5; var d = 250; var f = activeWin(""); var c = document.getElementById(f); if (!c) {
    return;
} var v = c.getContext("2d"); var s = c.width; var o = c.height; var w = c.width / 2; var u = c.height / 2; clear(v, s, o); v.strokeStyle = "rgb(0, 0, 255)"; v.lineWidth = 3; if (typeof drawMolecule.deep == "undefined") {
    drawMolecule.deep = [];
} if (drawMolecule.deep.length != F) {
    B = 0;
    drawMolecule.deep = [];
    for (C = drawMolecule.deep.length; C < F; C++) {
        B++;
        drawMolecule.deep[C] = [];
        drawMolecule.deep[C]["id"] = B;
        drawMolecule.deep[C]["sz"] = h[B].z;
    }
} for (C = 0; C < F; C++) {
    B = drawMolecule.deep[C].id;
    drawMolecule.deep[C].z = h[B].z;
} drawMolecule.deep.sort(function (x, k) { return (k.z - x.z); }); if (F > d) {
    h[0].gradients = 0;
} for (C = 0; C < F; C++) {
    atom = drawMolecule.deep[C].id;
    if (!h[atom].hide) {
        if (h[0].gradients) {
            drawAtom(v, atom, t, w, u);
        }
        else {
            drawAtomPlain(v, atom, t, w, u);
        }
        if (h[0].showcharges != 0) {
            DrawChargeCloud(v, atom, t * 1.5, w, u);
        }
        if (h[atom].highlite != 0) {
            DrawAtomHilite(v, atom, t * 1.5, w, u);
        }
        for (B = 1; B <= F; B++) {
            if ((m[atom][B] > 0) && (B != atom) && !h[B].hide) {
                for (z = C + 1; z < F; z++) {
                    if (drawMolecule.deep[z].id == B) {
                        drawBond(v, atom, B, t, w, u, h[0].gradients);
                    }
                }
            }
        }
    }
} }
function showLabels() { var a = Mol(); if (a[0].showlabels == 0) {
    buttonColor("LabelButton", 1);
    a[0].showlabels = 1;
    drawMolecule();
    return;
} buttonColor("LabelButton", 0); a[0].showlabels = 0; drawMolecule(); return; }
function drawAtom(o, f, c, p, n) { var b; var k, h, a; var l, g, d; var e = Mol(); var m = activeWin(""); b = e[f].atomicnumber; k = e[0].AtomScale * e[f].x + p; h = e[0].AtomScale * e[f].y + n; a = e[0].AtomScale * c * element(b, "radius"); l = k - (0.2 * a); g = h - (0.2 * a); d = 0.3 * a; k = Math.floor(k + 0.5); h = Math.floor(h + 0.5); a = Math.floor(a + 0.5); l = Math.floor(l + 0.5); g = Math.floor(g + 0.5); AtomColor = o.createRadialGradient(l, g, d, k, h, a); AtomColor.addColorStop(0, element(b, "color")); AtomColor.addColorStop(1, element(b, "gradient")); o.beginPath(); o.arc(k, h, a, 0, 2 * Math.PI, false); o.fillStyle = AtomColor; o.fill(); o.lineWidth = 0.01; o.strokeStyle = "black"; o.stroke(); o.closePath(); if (e[0].showlabels != 0) {
    atomLabel(o, b, f, k, h);
} }
function drawAtomPlain(o, f, c, p, n) { var b; var k, h, a; var l, g, d; var e = Mol(); var m = activeWin(""); b = e[f].atomicnumber; k = e[0].AtomScale * e[f].x + p; h = e[0].AtomScale * e[f].y + n; a = e[0].AtomScale * c * element(b, "radius"); l = k - (0.2 * a); g = h - (0.2 * a); d = 0.3 * a; k = Math.floor(k + 0.5); h = Math.floor(h + 0.5); a = Math.floor(a + 0.5); l = Math.floor(l + 0.5); g = Math.floor(g + 0.5); o.beginPath(); o.arc(k, h, a, 0, 2 * Math.PI, false); o.fillStyle = element(b, "color"); o.fill(); o.lineWidth = 1; o.strokeStyle = "black"; o.stroke(); o.closePath(); if (e[0].showlabels != 0) {
    atomLabel(o, b, f, k, h);
} }
function DrawChargeCloud(s, g, e, t, p) { var d; var l, k, a; var c, n, h, m; var f = Mol(); var o = activeWin(""); d = f[g].atomicnumber; l = f[0].AtomScale * f[g].x + t; k = f[0].AtomScale * f[g].y + p; a = f[0].AtomScale * e * element(d, "radius"); var b = f[g].charge; if (b >= 0) {
    (b > 1) ? m = 1 : m = b;
    c = 0;
    h = 0;
    n = 255;
} if (b < 0) {
    (b < -1) ? m = 1 : m = -b;
    c = 255;
    h = 0;
    n = 0;
} AtomColor = "rgba(" + c + "," + h + "," + n + "," + m + ")"; s.beginPath(); s.arc(l, k, a, 0, 2 * Math.PI, false); s.fillStyle = AtomColor; s.fill(); s.lineWidth = 0.01; s.strokeStyle = "black"; s.stroke(); s.closePath(); }
function DrawAtomHilite(p, f, d, q, o) { var c; var k, h, a; var b, m, g, l; var e = Mol(); var n = activeWin(""); c = e[f].atomicnumber; k = e[0].AtomScale * e[f].x + q; h = e[0].AtomScale * e[f].y + o; a = e[0].AtomScale * d * element(c, "radius"); AtomColor = "rgba(255,255,0,0.5)"; p.beginPath(); p.arc(k, h, a, 0, 2 * Math.PI, false); p.fillStyle = AtomColor; p.fill(); p.lineWidth = 0.01; p.strokeStyle = "black"; p.stroke(); p.closePath(); }
function atomLabel(l, b, c, a, m) { var g = element(b, "symbol"); var e = 14; var h = parseFloat(a); var f = parseFloat(m) + e / 2; var d = Mol(); l.lineWidth = 1; l.textAlign = "center"; l.font = "normal " + e + "px sans-serif"; l.fillStyle = element(b, "label"); l.beginPath(); l.fillText(g, h, f); var k = 10 / d[0].AtomScale; l.fillRect(h, f, k * 1.5, k); l.closePath(); }
function drawBond(u, o, n, s, w, v, F) { var B, y, x; var D, b, l, C, a, g; var h, f, e; var E, G; var q, m; var d = Mol(); var c = activeWin(""); var p = d[0].AtomScale; var t = Math.floor(0.1 * p + 0.5); var z = "rgb(200,128,51)"; m = p * s * element(d[o].atomicnumber, "radius") - 2; D = p * d[o].x + w; b = p * d[o].y + v; l = p * d[o].z; C = p * d[n].x + w; a = p * d[n].y + v; g = p * d[n].z; if (!F) {
    u.beginPath();
    u.moveTo(E, G);
    u.lineTo(C, a);
    u.lineWidth = t;
    u.strokeStyle = z;
    u.stroke();
    u.closePath();
} h = C - D; f = a - b; e = g - l; q = Math.sqrt(h * h + f * f + e * e); E = D + m * h / q; G = b + m * f / q; u.beginPath(); u.moveTo(E, G); u.lineTo(C, a); u.lineWidth = t + 2; u.strokeStyle = "rgb(0,0,0)"; u.stroke(); u.moveTo(E, G); u.lineTo(C, a); u.lineWidth = t; u.strokeStyle = z; u.stroke(); u.closePath(); }
function clear(b, c, a) { b.fillStyle = "rgb(255,255,255)"; b.fillRect(0, 0, c, a); b.beginPath(); b.rect(1, 1, c - 1, a - 1); b.lineWidth = 2; b.strokeStyle = "rgb(95,95,127)"; b.stroke(); b.closePath(); }
function drawHighlight(e, h, t, w, v) { var C, B, z; var m, g, n; var q; var p, d; var E, b, D, a; var f = Mol(); var l = BondMatrix(); var c = document.getElementById(e); var u = c.getContext("2d"); var s = c.width; var o = c.height; clear(u, s, o); u.strokeStyle = "rgb(0, 0, 255)"; u.lineWidth = 3; if (typeof drawHighlight.deep == "undefined") {
    drawHighlight.deep = [];
} if (drawHighlight.deep.length != f[0].numatoms) {
    B = 0;
    drawHighlight.deep = [];
    for (C = drawHighlight.deep.length; C < f[0].numatoms; C++) {
        B++;
        drawHighlight.deep[C] = [];
        drawHighlight.deep[C]["id"] = B;
        drawHighlight.deep[C]["sz"] = f[B].z;
    }
} for (C = 0; C < f[0].numatoms; C++) {
    B = drawHighlight.deep[C].id;
    drawHighlight.deep[C].z = f[B].z;
} drawHighlight.deep.sort(function (x, k) { return (k.z - x.z); }); for (C = 0; C < f[0].numatoms; C++) {
    atom = drawHighlight.deep[C].id;
    hilite = 0;
    for (ih = 1; ih <= h[0] * 3; ih++) {
        if (atom == h[ih]) {
            hilite = 1;
        }
    }
    HighlightAtom(u, atom, hilite, t, w, v);
    for (d = 1; d <= f[0].numatoms; d++) {
        if (l[atom][d] > 0) {
            highbond = 0;
            if (hilite > 0) {
                for (ih = 1; ih < h[0] * 3; ih++) {
                    if (d == h[ih]) {
                        highbond = 1;
                    }
                }
            }
            for (z = C + 1; z < f[0].numatoms; z++) {
                if (drawHighlight.deep[z].id == d) {
                    HighlightBond(u, atom, d, highbond, t, w, v);
                }
            }
        }
    }
} }
function HighlightAtom(s, g, a, p, u, t) { var o; var m, k, n; var v, B, w; var b, z, c; var f = new Array(); var q = "rgb(191,191,191)"; var l = "rgb(255,  0,  0)"; var e = "rgb(127,  0,  0)"; var h = Mol(); var d = activeWin(""); o = h[g].atomicnumber; m = h[0].AtomScale * h[g].x + u; k = h[0].AtomScale * h[g].y + t; n = h[0].AtomScale * p * element(o, "radius"); v = m - (0.2 * n); B = k - (0.2 * n); w = 0.3 * n; m = Math.floor(m + 0.5); k = Math.floor(k + 0.5); n = Math.floor(n + 0.5); v = Math.floor(v + 0.5); B = Math.floor(B + 0.5); AtomColor = s.createRadialGradient(v, B, w, m, k, n); alpha = 0.33; if (a > 0) {
    alpha = 1;
} b = element(o, "color").indexOf("(") + 1; z = element(o, "color").indexOf(")") - b; c = element(o, "color").substr(b, z); f = c.replace(/,/g, " ").split(" "); l = "rgba(" + f[0] + "," + f[1] + "," + f[2] + "," + alpha + ")"; b = element(o, "gradient").indexOf("(") + 1; z = element(o, "gradient").indexOf(")") - b; c = element(o, "gradient").substr(b, z); f = c.replace(/,/g, " ").split(" "); e = "rgba(" + f[0] + "," + f[1] + "," + f[2] + "," + alpha + ")"; AtomColor.addColorStop(0, l); AtomColor.addColorStop(1, e); s.beginPath(); s.arc(m, k, n, 0, 2 * Math.PI, false); s.fillStyle = AtomColor; s.fill(); s.lineWidth = 0.01; s.strokeStyle = "black"; s.stroke(); s.closePath(); if (a > 0) {
    atomLabel(s, o, g, m, k);
} }
function HighlightBond(w, p, o, e, t, y, x) { var D, B, z; var F, b, m, E, a, h; var l, g, f; var G, H; var s, n; var q = d[0].AtomScale; var v = Math.floor(0.1 * q + 0.5); var C = "rgba(200,128,51,1.0)"; var u = "rgba(191,191,191,0.33)"; var d = Mol(); var c = activeWin(""); n = q * t * element(d[p].atomicnumber, "radius"); F = q * d[p].x + y; b = q * d[p].y + x; m = q * d[p].z; E = q * d[o].x + y; a = q * d[o].y + x; h = q * d[o].z; l = E - F; g = a - b; f = h - m; s = Math.sqrt(l * l + g * g + f * f); G = F + n * l / s; H = b + n * g / s; w.beginPath(); w.moveTo(G, H); w.lineTo(E, a); w.lineWidth = v + 2; w.strokeStyle = "rgba(0,0,0,0.33)"; if (e > 0) {
    w.strokeStyle = "rgba(0,0,0,1.0)";
} w.stroke(); w.moveTo(G, H); w.lineTo(E, a); w.lineWidth = v; if (e > 0) {
    w.strokeStyle = C;
}
else {
    w.strokeStyle = u;
} w.stroke(); w.closePath(); }
function mouseState(a, b) { if (typeof mouseState.DownAtom == "undefined") {
    mouseState.DownAtom = -1;
} if (a == "Show") {
    return mouseState.DownAtom;
} if (a == "Set") {
    mouseState.DownAtom = b;
} }
function parameters() { if (typeof parameters.values === "undefined") {
    parameters.values = new paramObject();
} if (typeof parameters.values.mode == "undefined") {
    parameters.values.mode = "View";
} if (typeof parameters.values.elem == "undefined") {
    parameters.values.elem = "C";
} if (typeof parameters.values.clouds == "undefined") {
    parameters.values.clouds = 4;
} if (typeof parameters.values.add == "undefined") {
    parameters.values.add = "Add";
} if (typeof parameters.values.bond == "undefined") {
    parameters.values.bond = "Add";
} return parameters.values; }
function paramObject() { this.mode = "View"; this.element = "C"; this.clouds = 4; this.bondmode = "Add"; this.atommode = "Add"; }
function MouseDown(c) { var b, h; var d = c.target.id; var g = activeWin(d); var e = document.getElementById(g); var f = e.width; var a = e.height; b = c.pageX; h = c.pageY; if (c.targetTouches) {
    if (c.targetTouches.length == 1) {
        b = c.targetTouches[0].pageX;
        h = c.targetTouches[0].pageY;
    }
} mouseState("Set", onAtom(b, h, e, f, a)); }
function MouseUp(l) { var f, d; var g, e; var k = activeWin(""); var h = Mol(); var b = document.getElementById(k); var a = b.width; var m = b.height; var c = parameters(); f = l.pageX; d = l.pageY; if (l.targetTouches) {
    f = l.targetTouches[0].pageX;
    d = l.targetTouches[0].pageY;
} g = mouseState("Show"); mouseState("Set", -1); Upatom = onAtom(f, d, b, a, m); if (Upatom == 0) {
    viewGeom(0);
    return;
} if (Upatom == g) {
    if (c.mode == "View") {
        if (l.shiftKey > 0) {
            h[Upatom].highlite = ((h[Upatom].highlite + 1) % 2);
            drawMolecule();
        }
        else {
            viewGeom(g);
        }
    }
    if (c.mode == "Draw") {
        Undo("save");
        h[0].charge = 999;
        if (c.atommode == "Delete") {
            delAtom(Upatom);
        }
        else {
            newAtom(Upatom);
        }
    }
} if ((Upatom != g) && (c.mode == "Draw")) {
    Undo("save");
    if (c.bondmode == "Add") {
        h[0].charge = 999;
        addBond(g, Upatom);
    }
    if (c.bondmode == "Delete") {
        h[0].charge = 999;
        delBond(g, Upatom);
    }
    if (c.bondmode == "Rotate") {
        BondRotation("Set", g, Upatom);
    }
    drawMolecule();
} }
function onAtom(l, h, b, a, m) { var e, c, o, n; var g, k; var d = 0.5; var f = Mol(); l = (l - b.offsetLeft - a / 2); h = (h - b.offsetTop - m / 2); for (e = 1; e <= f[0].numatoms; e++) {
    c = f[e].atomicnumber;
    g = f[0].AtomScale * d * element(c, "radius");
    g = g * g;
    o = f[0].AtomScale * f[e].x - l;
    n = f[0].AtomScale * f[e].y - h;
    k = o * o + n * n;
    if (k <= g) {
        return e;
    }
} return 0; }
function MouseWheel(b) { var a = Mol(); if (b.preventDefault) {
    b.preventDefault();
} var d = b.detail ? b.detail * (-1) : b.wheelDelta; var c = (d > 0) ? 1.1 : 0.9; a[0].AtomScale = a[0].AtomScale * c; drawMolecule(); return false; }
function MouseMove(s) { var f, e; var q, p, D, C, E; var o, n, l; var v, c; var w, u, t, d, b, a; var B, g; var h = 2; var m = Mol(); var k = parameters(); if (typeof MouseMove.cx == "undefined") {
    MouseMove.cx = 250;
} if (typeof MouseMove.cy == "undefined") {
    MouseMove.cy = 250;
} if (mouseState("Show") == 0) {
    f = s.pageX;
    e = s.pageY;
    if (s.targetTouches) {
        if (s.targetTouches.length == 1) {
            f = s.targetTouches[0].pageX;
            e = s.targetTouches[0].pageY;
        }
    }
    q = (MouseMove.cx - f);
    p = (MouseMove.cy - e);
    MouseMove.cx = f;
    MouseMove.cy = e;
    if (Math.abs(q) + Math.abs(p) > 10) {
        return;
    }
    if (k.bondmode == "Rotate") {
        E = q + p;
        BondRotation("Rotate", E);
        drawMolecule();
        return;
    }
    if (s.shiftKey > 0) {
        t = Math.cos(q * h * Math.PI / 180);
        a = Math.sin(q * h * Math.PI / 180);
        for (i = 1; i <= m[0].numatoms; i++) {
            o = m[i].x;
            n = m[i].y;
            m[i].x = t * o + a * n;
            m[i].y = -a * o + t * n;
        }
        drawMolecule();
        return;
    }
    if (s.ctrlKey > 0) {
        D = q * 0.01;
        C = p * 0.01;
        for (i = 1; i <= m[0].numatoms; i++) {
            o = m[i].x;
            n = m[i].y;
            m[i].x = o - D;
            m[i].y = n - C;
        }
        drawMolecule();
        return;
    }
    w = Math.cos(p * h * Math.PI / 180);
    d = Math.sin(p * h * Math.PI / 180);
    u = Math.cos(q * h * Math.PI / 180);
    b = Math.sin(q * h * Math.PI / 180);
    for (i = 1; i <= m[0].numatoms; i++) {
        o = m[i].x;
        n = m[i].y;
        l = m[i].z;
        m[i].x = u * o + b * l;
        m[i].y = -d * b * o + w * n + d * u * l;
        m[i].z = -w * b * o - d * n + w * u * l;
    }
    drawMolecule();
} }
function viewGeom(x) { var y, e, c, b, a; var n, m, l, z; var u, s, p, D, C, B, q, o; var h; var g = activeWin(""); var f = document.getElementById(g); var w = f.getContext("2d"); var v = f.width; var t = f.height; var k = Mol(); if (typeof viewGeom.geom == "undefined") {
    viewGeom.geom = [0, 0, 0, 0, 0];
} if (x == 0) {
    for (y = 0; y < 5; y++) {
        viewGeom.geom[y] = 0;
    }
    drawMolecule();
    return;
} if (x) {
    for (y = 1; y < 5; y++) {
        if (viewGeom.geom[y] == x) {
            viewGeom(0);
        }
    }
} viewGeom.geom[0] = viewGeom.geom[0] + 1; sw = viewGeom.geom[0]; viewGeom.geom[sw] = x; switch (sw) {
    case 1:
        e = k[viewGeom.geom[1]].atomicnumber;
        h = element(e, "symbol") + viewGeom.geom[1].toString();
        if (k[0].showcharges != 0) {
            h += ": Charge = ";
            if (k[viewGeom.geom[1]].charge > 0) {
                h += "+";
            }
            h += k[viewGeom.geom[1]].charge.toFixed(2);
        }
        drawMolecule();
        geomLabel(w, h, v);
        break;
    case 2:
        n = k[viewGeom.geom[1]].x - k[viewGeom.geom[2]].x;
        m = k[viewGeom.geom[1]].y - k[viewGeom.geom[2]].y;
        l = k[viewGeom.geom[1]].z - k[viewGeom.geom[2]].z;
        z = Math.sqrt(n * n + m * m + l * l);
        z = z.toFixed(3);
        z = z.toString();
        e = k[viewGeom.geom[1]].atomicnumber;
        c = k[viewGeom.geom[2]].atomicnumber;
        h = element(e, "symbol") + viewGeom.geom[1].toString() + "--";
        h += element(c, "symbol") + viewGeom.geom[2].toString();
        h += " = " + z;
        drawMolecule();
        geomLabel(w, h, v);
        break;
    case 3:
        e = k[viewGeom.geom[1]].atomicnumber;
        c = k[viewGeom.geom[2]].atomicnumber;
        b = k[viewGeom.geom[3]].atomicnumber;
        h = element(e, "symbol") + viewGeom.geom[1].toString() + "--";
        h += element(c, "symbol") + viewGeom.geom[2].toString() + "--";
        h += element(b, "symbol") + viewGeom.geom[3].toString();
        ang = angle(k, viewGeom.geom[1], viewGeom.geom[2], viewGeom.geom[3]);
        ang = ang.toFixed(1);
        ang = ang.toString();
        h += " = " + ang + "ᵒ";
        drawMolecule();
        geomLabel(w, h, v);
        break;
    case 4:
        e = k[viewGeom.geom[1]].atomicnumber;
        c = k[viewGeom.geom[2]].atomicnumber;
        b = k[viewGeom.geom[3]].atomicnumber;
        a = k[viewGeom.geom[4]].atomicnumber;
        h = element(e, "symbol") + viewGeom.geom[1].toString() + "--";
        h += element(c, "symbol") + viewGeom.geom[2].toString() + "--";
        h += element(b, "symbol") + viewGeom.geom[3].toString() + "--";
        h += element(a, "symbol") + viewGeom.geom[4].toString();
        ang = dihedral(k, viewGeom.geom[1], viewGeom.geom[2], viewGeom.geom[3], viewGeom.geom[4]);
        ang = ang.toFixed(1);
        ang = ang.toString();
        h += " = " + ang;
        drawMolecule();
        geomLabel(w, h, v);
        for (y = 0; y < 5; y++) {
            viewGeom.geom[y] = 0;
        }
        break;
} }
function geomLabel(a, b, c) { a.lineWidth = 1; a.textAlign = "right"; a.textBaseline = "top"; a.font = "normal 18px sans-serif"; a.fillStyle = "#000000"; a.beginPath(); a.fillText(b, c - 5, 5); a.closePath(); }
function pickElem(b) { var e = element(1, "max"); var f, h, d; var g; var a = parameters(); var k = "silver"; var c = "lightskyblue"; if (typeof pickElem.metals == "undefined") {
    pickElem.metals = "none";
    pickElem.myfont = "14px";
    if (document.getElementById("pchooser")) {
        document.getElementById("pchooser").innerHTML = "Metals";
    }
} if (b == "PView") {
    if (document.getElementById("pchooser")) {
        if (document.getElementById("pchooser").innerHTML == "Metals") {
            pickElem.metals = "table-cell";
            pickElem.myfont = "10px";
            document.getElementById("pchooser").innerHTML = "Organic";
        }
        else {
            pickElem.metals = "none";
            pickElem.myfont = "14px";
            document.getElementById("pchooser").innerHTML = "Metals";
        }
    }
} if (document.getElementById("Row1")) {
    document.getElementById("Row1").style.display = pickElem.metals;
} if (document.getElementById("Row2")) {
    document.getElementById("Row2").style.display = pickElem.metals;
} if (document.getElementById("Row3")) {
    document.getElementById("Row3").style.display = pickElem.metals;
} if (document.getElementById("RowLa")) {
    document.getElementById("RowLa").style.display = pickElem.metals;
} if (document.getElementById("RowAc")) {
    document.getElementById("RowAc").style.display = pickElem.metals;
} if (document.getElementById("RowLa2")) {
    document.getElementById("RowLa2").style.display = pickElem.metals;
} if (document.getElementById("RowAc2")) {
    document.getElementById("RowAc2").style.display = pickElem.metals;
} for (f = 1; f < e; f++) {
    delete d;
    h = "m" + element(f, "symbol");
    if (document.getElementById(h)) {
        d = document.getElementById(h).style;
    }
    h = "p" + element(f, "symbol");
    if (document.getElementById(h)) {
        d = document.getElementById(h).style;
        d.display = pickElem.metals;
    }
    if (d) {
        d.backgroundColor = k;
        d.fontSize = pickElem.myfont;
        if (element(f, "symbol") == b) {
            d.backgroundColor = c;
        }
    }
} buttonColor("delbtn", 0); buttonColor("delbond", 0); buttonColor("rotbond", 0); if (b == "Delete") {
    buttonColor("delbtn", 1);
    a.atommode = "Delete";
    return;
} if (b == "DelBond") {
    buttonColor("delbond", 1);
    a.bondmode = "Delete";
    return;
} if (b == "RotateBond") {
    if (a.bondmode != "Rotate") {
        buttonColor("rotbond", 1);
        a.bondmode = "Rotate";
    }
    else {
        a.bondmode = "";
        BondRotation("Clear");
    }
    return;
} a.element = b; a.atommode = "Add"; a.bondmode = "Add"; }
function pickClouds(b) { var a, d; var e = parseInt(b); var c = parameters(); for (a = 1; a < 5; a++) {
    d = "cld" + a;
    buttonColor(d, 0);
    if (a == e) {
        buttonColor(d, 1);
    }
} c.clouds = e; }
function drawmode() { var a = parameters(); if (document.getElementById("drawDiv")) {
    document.getElementById("drawDiv").style.display = "inline";
} if (document.getElementById("viewDiv")) {
    document.getElementById("viewDiv").style.display = "none";
} buttonColor("modeDraw", 1); buttonColor("modeView", 0); a.mode = "Draw"; a.element = "C"; a.atommode = "Add"; a.bondmode = "Add"; }
function viewmode() { var a = parameters(); if (document.getElementById("drawDiv")) {
    document.getElementById("drawDiv").style.display = "none";
} if (document.getElementById("viewDiv")) {
    document.getElementById("viewDiv").style.display = "inline";
} buttonColor("modeDraw", 0); buttonColor("modeView", 1); a.mode = "View"; pickElem("ClearBond"); formula(); showCoord(1); }
function BondRotation(d, m, g) { var b, k; var n, l, o, f; var c, h; var a = 1; var e = Mol(); if (typeof BondRotation.RotateAtom1 == "undefined") {
    BondRotation.RotateAtom1 = 0;
} if (typeof BondRotation.RotateAtom2 == "undefined") {
    BondRotation.RotateAtom2 = 0;
} if (typeof BondRotation.RotateList == "undefined") {
    BondRotation.RotateList = new Array();
    BondRotation.RotateList[0] = 0;
} if (d == "Clear") {
    BondRotation.RotateAtom1 = 0;
    BondRotation.RotateAtom2 = 0;
    BondRotation.RotateList[0] = 0;
    return;
} if (d == "Set") {
    BondRotation.RotateAtom1 = m;
    BondRotation.RotateAtom2 = g;
    bondAlign(m, g);
    return;
} if (d == "Rotate") {
    atom1 = BondRotation.RotateAtom1;
    atom2 = BondRotation.RotateAtom2;
    c = Math.cos(m * a * Math.PI / 360);
    h = Math.sin(m * a * Math.PI / 360);
    if (BondRotation.RotateList[0] == 0) {
        BondRotation.RotateList[0] = 1;
        BondRotation.RotateList[1] = BondRotation.RotateAtom2;
        BondRotation.RotateList = rotlist(BondRotation.RotateList, atom1, atom2);
    }
    InfoWin("\n--- Bond rotation ---\n");
    for (b = 1; b <= BondRotation.RotateList[0]; b++) {
        j = BondRotation.RotateList[b];
        InfoWin(element(e[j].atomicnumber, "symbol") + j + "\n");
    }
    o = e[atom1].x;
    f = e[atom1].y;
    for (k = 1; k <= BondRotation.RotateList[0]; k++) {
        b = BondRotation.RotateList[k];
        n = e[b].x - o;
        l = e[b].y - f;
        e[b].x = c * n + h * l + o;
        e[b].y = -h * n + c * l + f;
    }
} }
function bondAlign(c, a) { var e; var k, h, g; var p, o, m; var n, l, d, b; var f = Mol(); p = f[a].x - f[c].x; o = f[a].y - f[c].y; m = f[a].z - f[c].z; if ((o == 0) && (m == 0)) {
    n = 1;
    d = 0;
}
else {
    n = Math.sqrt(m * m / ((o * o) + (m * m)));
    d = Math.sqrt(1 - (n * n));
} vsign = o * m; if (vsign < 0) {
    d = -d;
} g = d * o + n * m; if ((p == 0) && (g == 0)) {
    l = 1;
    b = 0;
}
else {
    l = Math.sqrt(g * g / ((p * p) + (g * g)));
    b = Math.sqrt(1 - (l * l));
} vsign = p * g; if (vsign < 0) {
    b = -b;
} for (e = 1; e <= f[0].numatoms; e++) {
    k = f[e].x;
    h = f[e].y;
    g = f[e].z;
    f[e].x = (k * l) - (h * d * b) - (g * n * b);
    f[e].y = (h * n) - (g * d);
    f[e].z = (k * b) + (h * d * l) + (g * n * l);
} if (f[c].z < f[a].z) {
    for (e = 1; e <= f[0].numatoms; e++) {
        f[e].x = -f[e].x;
        f[e].z = -f[e].z;
    }
} }
function rotlist(g, c, a) { var d, b; var h, k; var e = Mol(); var f = BondMatrix(); for (h = 1; h <= e[0].numatoms; h++) {
    if (f[a][h] > 0) {
        k = 0;
        if (h == c) {
            k = 1;
        }
        for (b = 1; b <= g[0]; b++) {
            if (h == g[b]) {
                k = 1;
                b = g[0] + 1;
            }
        }
        if (k == 0) {
            g[0]++;
            g[g[0]] = h;
            rotlist(g, a, h);
        }
    }
} return g; }
function setCharge() { var a = Mol(); var b = document.getElementById("SelectCharge"); if (b) {
    a[0].charge = b.value * 1;
} }
function simpleQ() { var d, c; var f = []; var b = document.getElementById("bondMatrix"); var a = Mol(); var e = a[0].numatoms; if (e < 1) {
    InfoWin("Cannot set charges. No atoms found.\n", 1);
    return;
} if (a[0].showcharges != 0) {
    buttonColor("ChargeButton", 0);
    a[0].showcharges = 0;
    if (document.getElementById("SelectCharge")) {
        document.getElementById("SelectCharge").value = 0;
    }
    drawMolecule();
    return;
} buttonColor("ChargeButton", 1); a[0].showcharges = 1; InfoWin("", 1); if (b) {
    b.innerHTML = "";
} for (d = 0; d <= e; d++) {
    f[d] = [];
    for (c = 0; c <= e; c++) {
        f[d][c] = 0;
    }
} for (d = 1; d <= e; d++) {
    a[d].charge = 0;
} sigmaBonds(f); if (a[0].charge == 999) {
    formalcharge();
} checkcharge(f); checkOctet(f); limitShare(f); formPi(f); checkOctet(f); formDative(f); atomicCharge(f); if (b) {
    showBondMatrix(f, b);
} drawMolecule(); return; }
function formalcharge() { var c, d; var f, b; var e, a; var g = Mol(); var k = g[0].numatoms; var h = BondMatrix(); e = 0; a = 0; for (c = 1; c <= k; c++) {
    f = 0;
    if (element(g[c].atomicnumber, "block") == "s") {
        f = 2;
    }
    if (element(g[c].atomicnumber, "block") == "p") {
        f = 8;
    }
    if (f > 0) {
        b = h[c][0] + element(g[c].atomicnumber, "valence") - f;
        if (b < 0) {
            a += b;
        }
        if (b > 0) {
            e += b;
        }
    }
} while (a <= -2) {
    a += 2;
} g[0].charge = e + a; return; }
function checkcharge(b) { var g, f, k; var a; var c, h; var l = Mol(); var p = l[0].numatoms; var d, o; var n; var m = BondMatrix(); var e = 0.00001; a = 0; for (g = 1; g <= p; g++) {
    a += element(l[g].atomicnumber, "valence");
    for (f = g; f <= p; f++) {
        a -= b[g][f];
    }
} c = a - l[0].charge; if (Math.abs(c) < e) {
    return;
} if (c < -e) {
    o = 0;
    for (g = 1; g <= l[0].numatoms; g++) {
        d = element(l[g].atomicnumber, "block");
        if ((d == "d") || (d == "f")) {
            o++;
        }
    }
    if (o > 0) {
        h = -c / o;
        for (g = 1; g <= l[0].numatoms; g++) {
            d = element(l[g].atomicnumber, "block");
            if ((d == "d") || (d == "f")) {
                b[g][g] -= h;
            }
        }
    }
    else {
        k = 0;
        for (g = 1; g <= l[0].numatoms; g++) {
            if (b[g][g] > 0) {
                k++;
            }
        }
        n = -c;
        if (k > 0) {
            n = 0;
            h = -c / k;
            for (g = 1; g <= l[0].numatoms; g++) {
                if (b[g][g] > 0) {
                    b[g][g] -= h;
                    if (b[g][g] < 0) {
                        n -= b[g][g];
                        b[g][g] = 0;
                    }
                }
            }
        }
        if (n > 0) {
            k = 0;
            for (g = 1; g <= l[0].numatoms; g++) {
                if (b[g][g] > 0) {
                    k++;
                }
            }
            if (k > 0) {
                h = n / k;
                for (g = 1; g <= l[0].numatoms; g++) {
                    if (b[g][g] > 0) {
                        b[g][g] -= h;
                    }
                }
            }
        }
    }
} if (c > e) {
    checkOctet(b);
    k = 0;
    for (g = 1; g <= l[0].numatoms; g++) {
        if (b[g][0] > 0) {
            k++;
        }
    }
    n = c;
    if (k > 0) {
        n = 0;
        h = c / k;
        for (g = 1; g <= l[0].numatoms; g++) {
            if (b[g][0] > 0) {
                if (h <= b[g][0]) {
                    b[g][g] += h;
                }
                else {
                    b[g][g] += b[g][0];
                    n += h - b[g][0];
                    b[g][0] = 0;
                }
            }
        }
        if (n > 0) {
            k = 0;
            for (g = 1; g <= l[0].numatoms; g++) {
                if (b[g][0] > 0) {
                    k++;
                }
            }
            if (k > 0) {
                h = n / k;
                n = 0;
                for (g = 1; g <= l[0].numatoms; g++) {
                    if (b[g][0] > 0) {
                        if (h <= b[g][0]) {
                            b[g][g] += h;
                        }
                        else {
                            b[g][g] += b[g][0];
                            n += h - b[g][0];
                            b[g][0] = 0;
                        }
                    }
                }
            }
        }
    }
    if (n > 0) {
        k = 0;
        for (g = 1; g <= l[0].numatoms; g++) {
            if (l[g].atomicnumber > 12) {
                k++;
            }
        }
        if (k > 0) {
            h = n / k;
            for (g = 1; g <= l[0].numatoms; g++) {
                if (l[g].atomicnumber > 12) {
                    b[g][g] += h;
                }
            }
        }
    }
} a = 0; for (g = 1; g <= p; g++) {
    a += element(l[g].atomicnumber, "valence");
    for (f = g; f <= p; f++) {
        a -= b[g][f];
    }
} c = a - l[0].charge; if (Math.abs(c) > e) {
    InfoWin("ERROR: Unable to assign electrons to balance charge.\n", 1);
    InfoWin("   Assigned charge = " + l[0].charge + "\n");
    InfoWin("Charge based on e- = " + a + "\n\n");
} return; }
function sigmaBonds(f) { var c, b; var g; var a = Mol(); var e = a[0].numatoms; var d = BondMatrix(); for (c = 1; c < e; c++) {
    for (b = c + 1; b <= e; b++) {
        if (d[c][b] > 0) {
            f[c][b] = 2;
            f[b][c] = 2;
        }
    }
} for (c = 1; c <= e; c++) {
    g = element(a[c].atomicnumber, "valence") - d[c][0];
    if ((a[c].atomicnumber < 11) && (d[c][0] > 3)) {
        g = 0;
    }
    if (g > 0) {
        f[c][c] = g;
    }
} return f; }
function checkOctet(f) { var d, c, b; var a = Mol(); var e = a[0].numatoms; for (d = 1; d <= e; d++) {
    b = 0;
    f[d][0] = 0;
    if (element(a[d].atomicnumber, "block") == "p") {
        b = 8;
        for (c = 1; c <= e; c++) {
            b -= f[d][c];
        }
    }
    if (b > 0) {
        f[d][0] = b;
    }
} return f; }
function limitShare(g) { var d, c, b; var a = Mol(); var f = a[0].numatoms; var e = BondMatrix(); for (d = 1; d <= f; d++) {
    if (g[d][0] > 0) {
        b = 0;
        for (c = 1; c <= f; c++) {
            if ((e[d][c] > 0) && (g[c][0] > 0)) {
                b++;
            }
        }
        (b > 0) ? g[d][0] = g[d][0] / b : g[d][0] = 0;
    }
} return g; }
function formPi(h) { var e, c, b; var d; var a = Mol(); var g = a[0].numatoms; var f = BondMatrix(); for (e = 1; e < g; e++) {
    if (h[e][0] > 0) {
        for (c = e + 1; c <= g; c++) {
            if (f[e][c] > 0) {
                d = Math.min(h[e][0], h[c][0]);
                if (d > 0) {
                    h[e][c] += 2 * d;
                    h[c][e] += 2 * d;
                    h[e][e] -= d;
                    h[c][c] -= d;
                }
            }
        }
    }
} for (e = 1; e <= g; e++) {
    if (h[e][e] < 0) {
        InfoWin("ERROR in formPi: Atom " + e + " has " + h[e][e].toFixed(3) + " lone pairs.\n");
        h[e][e] = 0;
    }
} return h; }
function formDative(a) { var e, d, b, f; var c; var g; var m = new Array(); var h = Mol(); var n = h[0].numatoms; var l = BondMatrix(); c = 0; for (e = 1; e <= n; e++) {
    if (a[e][0] > 0) {
        c = 1;
    }
} if (c == 0) {
    return;
} for (e = 1; e <= n; e++) {
    m[e] = 0;
} for (e = 1; e <= n; e++) {
    if (a[e][0] > 0) {
        f = 0;
        for (d = 1; d <= n; d++) {
            if (l[e][d] > 0) {
                if (a[d][d] > 0) {
                    f++;
                }
            }
        }
        if (f > 0) {
            a[e][0] = a[e][0] / f;
            for (d = 1; d <= n; d++) {
                if (l[e][d] > 0) {
                    if (a[d][d] > 0) {
                        m[d] += a[e][0];
                    }
                }
            }
        }
    }
} g = 1; for (e = 1; e <= n; e++) {
    if (m[e] > a[e][e]) {
        g = 0;
    }
} if (g > 0) {
    for (e = 1; e <= n; e++) {
        if (a[e][0] > 0) {
            for (d = 1; d <= n; d++) {
                if (l[e][d] > 0) {
                    if (m[d] > 0) {
                        a[e][d] += a[e][0];
                        a[d][e] += a[e][0];
                        a[d][d] -= a[e][0];
                    }
                }
            }
        }
    }
} return a; }
function atomicCharge(e) { var s = 0.5; var l = 0.5; var g = 15; var d = 0.001; var p, o, t; var c, f; var m, u, n; var a = 0; var b = new Array(); var h = Mol(); var v = h[0].numatoms; var k = BondMatrix(); for (p = 1; p <= v; p++) {
    a += element(h[p].atomicnumber, "valence");
    for (o = 1; o <= v; o++) {
        if (p == o) {
            a -= e[p][p];
        }
        else {
            a -= 0.5 * e[p][o];
        }
    }
} u = Math.abs(a - h[0].charge); if (u > 0.001) {
    alert("Error: Electron assignment does NOT match molecular charge.");
} f = l; if (Math.abs(a) > 0.001) {
    f = 1;
} for (p = 1; p <= v; p++) {
    c = h[p].atomicnumber;
    if ((element(c, "block") == "d") || (element(c, "block") == "f")) {
        f = 0;
    }
    m = element(c, "EN") || 0;
    if (m == 0) {
        m = 1;
        InfoWin("WARNING: No electronegativity defined for ");
        InfoWin(element(h[p].atomicnumber, "symbol") + "\n");
    }
    b[p] = m;
} if (f == 1) {
    InfoWin("Using 100% formal charge method to calculate charges.\n");
} if (f == 0) {
    InfoWin("Using 100% bond polarity method to calculate charges.\n");
} if (f == l) {
    InfoWin("Using mixture of formal charge and bond polarity method to calculate charges.\n");
} t = 0; n = 100; while ((t < g) && (n > d)) {
    t++;
    for (p = 1; p <= v; p++) {
        c = h[p].atomicnumber;
        m = f * (element(c, "valence") - e[p][p]);
        for (o = 1; o <= v; o++) {
            if (k[p][o] > 0) {
                m += (1 - f) * 0.5 * e[p][o];
                m -= e[p][o] * b[p] / (b[p] + b[o]);
            }
        }
        h[p].charge = m;
    }
    n = 0;
    for (p = 1; p <= v; p++) {
        m = b[p];
        b[p] = element(h[p].atomicnumber, "EN") || 1;
        b[p] += s * h[p].charge;
        u = Math.abs(m - b[p]);
        if (u > n) {
            n = u;
        }
    }
} return e; }
function dipoleMoment() { var f; var e, d, b, h; var c = 4.8032; var a = Mol(); var g = a[0].numatoms; e = 0; d = 0; b = 0; for (f = 1; f <= g; f++) {
    e += a[f].x * a[f].charge;
    d += a[f].y * a[f].charge;
    b += a[f].z * a[f].charge;
} h = c * Math.sqrt(e * e + d * d + b * b); return h; }
function showBondMatrix(b, m) { var g, e; var q, l; var c, h; var d = ""; var a; var f; var o = new Array(); var p = new Array(); var k = Mol(); var n = k[0].numatoms; f = 0; for (g = 1; g <= n; g++) {
    f += k[g].charge;
} h = dipoleMoment(); m.innerHTML = "<p><strong>Molecular charge = " + f.toFixed(1) + ", Dipole &approx; " + h.toFixed(1) + " D</strong>"; InfoWin("Bond Matrix:  Off-diagonal = e- in bonds, diagonal = unshared e-\n"); InfoWin("      "); for (g = 1; g <= n; g++) {
    a = element(k[g].atomicnumber, "symbol");
    if (a.length < 2) {
        a += " ";
    }
    InfoWin(" " + a + " ");
    if ((g % 5) == 0) {
        InfoWin(" ");
    }
} InfoWin("\n"); for (g = 1; g <= n; g++) {
    a = element(k[g].atomicnumber, "symbol");
    if (a.length < 2) {
        a += " ";
    }
    if (g < 10) {
        InfoWin(" ");
    }
    InfoWin(g + " " + a + " ");
    for (e = 1; e <= n; e++) {
        InfoWin(b[g][e].toFixed(1) + " ");
        if ((e % 5) == 0) {
            InfoWin(" ");
        }
    }
    InfoWin(" q = ");
    if (k[g].charge > 0) {
        InfoWin("+");
    }
    InfoWin(k[g].charge.toFixed(2) + "\n");
    if ((g % 5) == 0) {
        InfoWin("\n");
    }
} return; }
function MyFileReader(b) { var d; var c = b.target.files[0]; if (c) {
    var a = new FileReader();
    a.onload = function (e) { d = 0; var g = extension(c.name); var h = e.target.result; var f = h.split("\n"); if (g == "xyz") {
        d = 1;
        readXYZfile(f);
    } if (g == "mol") {
        d = 1;
        readMOLfile(c, f);
    } if (g == "inp") {
        d = 1;
        readINPfile(c, f);
    } if (d == 0) {
        InfoWin("*** ERROR: Invalid file type for " + c.name + ". ***", 1);
        return;
    } centerMolecule(); drawMolecule(); };
    a.readAsText(c);
}
else {
    alert("Failed to load file");
} }
function extension(a) { var b = a.substring(a.lastIndexOf(".") + 1); return b.toLowerCase(); }
function showgallery(m, b, o, n, p) { var g, a, l; var h; var d, c; var e, k; var f; if (m == "delete") {
    if (typeof showgallery.num != "undefined") {
        showgallery.num = 0;
        delete showgallery.list;
    }
    return;
} if (!document.getElementById("gallery")) {
    alert('Warning: showgallery called, but no <div id="gallery"></div> exists on html page.');
    return;
} if (typeof showgallery.list === "undefined") {
    showgallery.num = 0;
    showgallery.list = [];
} a = showgallery.num; c = "gallerycanvas"; d = "galleryframe"; l = a; for (g = 0; g < o.length; g++) {
    showgallery.list[l] = b + o[g];
    showgallery.num++;
    l++;
} f = 'width="' + p + '" height="' + p + '"></canvas>'; h = ""; if (m) {
    h = "<h3>" + m + "</h3>\n";
} l = a; for (g = 0; g < o.length; g++) {
    k = c + l;
    e = d + l;
    h += '<div class="galleryframe" id="' + e + '">';
    h += '<canvas id="' + k + '" ' + f + "\n";
    h += '<p style="text-align: center;">';
    h += n[g];
    h += "</p></div>\n";
    l++;
} h += '<p class="clear">&nbsp;</p>\n\n'; document.getElementById("gallery").innerHTML += h; if (document.getElementById("debug")) {
    document.getElementById("debug").innerHTML += h;
} px = p + "px"; l = a; for (g = 0; g < o.length; g++) {
    e = d + l;
    if (document.getElementById(e)) {
        document.getElementById(e).style.width = px;
    }
    l++;
} for (g = 0; g < showgallery.num; g++) {
    k = c + g;
    activeWin(k);
    delMolecule();
    readServerFile(showgallery.list[g]);
    if (document.getElementById("debug")) {
        h = "\n\nProcessed molecule " + g;
        h += " named " + showgallery.list[g];
        document.getElementById("debug").innerHTML += h;
    }
} }
function galleryUniform() { var c, b, e; var f; var d = "gallerycanvas"; var a = []; b = 0; f = d + b; while (document.getElementById(f)) {
    b++;
    f = d + b;
} e = 1000; for (c = 0; c < b; c++) {
    f = d + c;
    activeWin(f);
    a = Mol();
    if (a[0].AtomScale < e) {
        e = a[0].AtomScale;
    }
} if (e < 1000) {
    for (c = 0; c < b; c++) {
        f = d + c;
        activeWin(f);
        a = Mol();
        a[0].AtomScale = e;
        drawMolecule();
    }
} }
function galleryReset() { var b, a; var d; var c = "gallerycanvas"; a = 0; d = c + a; while (document.getElementById(d)) {
    a++;
    d = c + a;
} for (b = 0; b < a; b++) {
    d = c + b;
    activeWin(d);
    centerMolecule();
    drawMolecule();
} }
function readServerFile(b) { var a; var f; var e = new Array(); var d = extension(b); var c; c = new XMLHttpRequest(); c.open("GET", b, false); c.send(); a = c.responseText.split("\n"); f = 0; if (d == "xyz") {
    f = 1;
    readXYZfile(a);
} if (d == "mol") {
    f = 1;
    readMOLfile(localfile, a);
} if (d == "inp") {
    f = 1;
    readINPfile(localfile, a);
} if (f == 0) {
    InfoWin("*** ERROR: Invalid file type. ***", 1);
    return;
} centerMolecule(); drawMolecule(); }
function InfoWin(a, c) { var b = a || ""; var d = c || 0; if (!document.getElementById("information")) {
    return;
} if (d > 0) {
    document.getElementById("information").value = b;
}
else {
    document.getElementById("information").value += b;
} }
function loadMolecule() { addAtom(6, 0, 0, 0); addAtom(1, 0.874, 0.618, 0); addAtom(1, -0.874, 0.618, 0); addAtom(1, 0, -0.618, 0.874); addAtom(1, 0, -0.618, -0.874); addBond(1, 2); addBond(1, 3); addBond(1, 4); addBond(1, 5); }
function resetView() { var b; var a = Mol(); for (b = 1; b <= a[0].numatoms; b++) {
    a[b].highlite = 0;
    a[b].hide = 0;
} InfoWin("", 1); formula(); centerMolecule(); drawMolecule(); }
function buttonColor(b, c) { c = c || 0; var a = "silver"; if (c) {
    a = "lightskyblue";
} if (document.getElementById(b)) {
    document.getElementById(b).style.backgroundColor = a;
} }
function initialize() { var c = activeWin(); var b = document.getElementById("molfile"); if (!c) {
    c = activeWin("");
    if (!c) {
        alert("No canvas present. Either create a canvas or remove onLoad=initialize() statement from <body>.");
    }
    return;
} if (b) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        b.addEventListener("change", MyFileReader, false);
    }
    else {
        alert("The File APIs are not fully supported by your browser.");
    }
} drawPeriodic(); var a = Mol(); viewmode(); if (typeof a == "undefined") {
    delMolecule();
} if (a[0].numatoms < 1) {
    delMolecule();
    loadMolecule();
    formula();
    centerMolecule();
} drawMolecule(); pickClouds(4); pickElem("C"); }
function newAtom(p) { var t, s, q, b; var o, n, m, a; var u, w; var v, d; var f; var g = []; var e = parameters(); var h = Mol(); var l = BondMatrix(); var c = activeWin(""); atomicNumber = lookupSymbol(e.element); b = l[p][0]; if (b == 0) {
    w = element(atomicNumber, "radius") + element(h[p].atomicnumber, "radius");
    dx = h[p].x + w;
    dy = h[p].y;
    dz = h[p].z;
    addAtom(atomicNumber, dx, dy, dz);
    addBond(p, h[0].numatoms);
    addH(h[0].numatoms);
    centerMolecule();
    drawMolecule(c);
    return;
} d = 0; for (t = 1; t <= h[0].numatoms; t++) {
    if ((l[p][t] > 0) && (t != p)) {
        g[++d] = t;
    }
} g[0] = d; if (g[0] != l[p][0]) {
    alert("ERROR: Supposed to be " + b + " bonds on atom " + p + ", but " + d + " bonds found.");
} if (atomicNumber == 1) {
    o = 0;
    n = 0;
    m = 0;
    for (t = 1; t <= b; t++) {
        s = g[t];
        dx = h[s].x - h[p].x;
        dy = h[s].y - h[p].y;
        dz = h[s].z - h[p].z;
        dd = Math.sqrt(dx * dx + dy * dy + dz * dz);
        o += dx / dd;
        n += dy / dd;
        m += dz / dd;
    }
    a = Math.sqrt(o * o + n * n + m * m);
    w = element(1, "radius") + element(h[p].atomicnumber, "radius");
    o = h[p].x - o * w / a;
    n = h[p].y - n * w / a;
    m = h[p].z - m * w / a;
    addAtom(1, o, n, m);
    for (d = 1; d <= b; d++) {
        f = 0;
        u = distance(h, g[d], h[0].numatoms);
        if (u < 0.2) {
            f = 1;
        }
    }
    if ((f) && (b > 1)) {
        t = g[1];
        s = g[2];
        o = (h[t].y - h[p].y) * (h[s].z - h[p].z);
        o -= (h[t].z - h[p].z) * (h[s].y - h[p].y);
        n = (h[t].z - h[p].z) * (h[s].x - h[p].x);
        n -= (h[t].x - h[p].x) * (h[s].z - h[p].z);
        m = (h[t].x - h[p].x) * (h[s].y - h[p].y);
        m -= (h[t].y - h[p].y) * (h[s].x - h[p].x);
        a = Math.sqrt(o * o + n * n + m * m);
        h[h[0].numatoms].x = h[p].x - o * w / a;
        h[h[0].numatoms].y = h[p].y - n * w / a;
        h[h[0].numatoms].z = h[p].z - m * w / a;
        f = 0;
        for (d = 1; d <= b; d++) {
            u = distance(h, g[d], h[0].numatoms);
            if (u < 0.2) {
                f = 1;
            }
        }
    }
    if (f) {
        alert("Error adding H atom");
        delAtom(h[0].numatoms);
        return;
    }
    addBond(p, h[0].numatoms);
    centerMolecule();
    drawMolecule(c);
    b = 0;
    return;
} if (b == 1) {
    t = p;
    s = g[1];
    dx = h[t].x - h[s].x;
    dy = h[t].y - h[s].y;
    dz = h[t].z - h[s].z;
    u = Math.sqrt(dx * dx + dy * dy + dz * dz);
    w = element(atomicNumber, "radius") + element(h[s].atomicnumber, "radius");
    dx *= w / u;
    dy *= w / u;
    dz *= w / u;
    h[t].atomicnumber = atomicNumber;
    h[t].x = dx + h[s].x;
    h[t].y = dy + h[s].y;
    h[t].z = dz + h[s].z;
    addH(p);
    centerMolecule();
    drawMolecule(c);
} if (b > 1) {
    h[p].atomicnumber = atomicNumber;
    drawMolecule(c);
} }
function addH(k) { var f, d, m, a, n; var e, c; var h; var b = parameters(); var g = Mol(); var l = BondMatrix(); var o = activeWin(""); if (element(g[k].atomicnumber, "block") != "p") {
    return;
} m = b.clouds; a = g[k].atomicnumber; valence = element(a, "valence"); n = 3 + m - valence; if (n < 1) {
    m = 1;
} if (m <= 1) {
    return;
} e = 0; f = 0; while ((e == 0) && (f < g[0].numatoms)) {
    f++;
    if ((l[k][f] > 0) && (f != k)) {
        e = f;
    }
} c = 0; if (e) {
    f = 0;
    while ((c == 0) && (f < g[0].numatoms)) {
        f++;
        if (l[e][f] > 0) {
            if ((f != k) && (f != e)) {
                c = f;
            }
        }
    }
} switch (m) {
    case 2:
        add1H(k, e);
        break;
    case 3:
        add2H(k, e, c, n);
        break;
    case 4:
        add3H(k, e, c, n);
        break;
    default: break;
} centerMolecule(); drawMolecule(o); }
function add1H(g, c) { var b, o, n, m; var d, e, a; var l, k, h; var f = Mol(); d = f[g].atomicnumber; a = element(d, "radius") + element(1, "radius"); if (c == 0) {
    o = f[g].x + a;
    n = f[g].y;
    m = f[g].z;
    addAtom(1, l, k, h);
    addBond(g, f[0].numatoms);
    return;
} o = f[c].x - f[g].x; n = f[c].y - f[g].y; m = f[c].z - f[g].z; e = Math.sqrt(o * o + n * n + m * m); l = f[g].x - o * a / e; k = f[g].y - n * a / e; h = f[g].z - m * a / e; addAtom(1, l, k, h); addBond(g, f[0].numatoms); }
function add2H(a, K, J, l) { var v, u, t, b; var z, x, w, F; var p, o, m, c, G; var N, M, L, H; var f, e, d, D, C, B; var k, h, g, I; var q; var s = new Array(); var E = Mol(); v = E[a].atomicnumber; b = element(v, "radius") + element(1, "radius"); if (K == 0) {
    f = E[a].x + 0.5 * b;
    e = E[a].y + b * Math.sqrt(3) / 2;
    d = E[a].z;
    addAtom(1, f, e, d);
    addBond(a, E[0].numatoms);
    if (l > 1) {
        e = E[a].y - b * Math.sqrt(3) / 2;
        addAtom(1, f, e, d);
        addBond(a, E[0].numatoms);
    }
    return;
} u = E[K].atomicnumber; z = E[K].x - E[a].x; x = E[K].y - E[a].y; w = E[K].z - E[a].z; F = Math.sqrt(z * z + x * x + w * w); if (J == 0) {
    for (var y = 1; y < E[0].numatoms; y++) {
        if ((y != a) && (y != K)) {
            J = y;
            y = E[0].numatoms;
        }
    }
} if (J == 0) {
    E[a].x = 0;
    E[a].y = 0;
    E[a].z = 0;
    E[K].x = -F;
    E[K].y = 0;
    E[K].z = 0;
    f = E[a].x + 0.5 * b;
    e = E[a].y + b * Math.sqrt(3) / 2;
    d = E[a].z;
    addAtom(1, f, e, d);
    addBond(a, E[0].numatoms);
    if (l > 1) {
        e = E[a].y - b * Math.sqrt(3) / 2;
        addAtom(1, f, e, d);
        addBond(a, E[0].numatoms);
    }
    return;
} t = E[J].atomicnumber; p = E[J].x - E[K].x; o = E[J].y - E[K].y; m = E[J].z - E[K].z; c = Math.sqrt(p * p + o * o + m * m); s[0] = z; s[1] = x; s[2] = w; s[3] = -b * F / 2; G = (-z * p - x * o - w * m) / (F * c); G = Math.acos(-1 / 2) + Math.PI - Math.acos(G); s[4] = p; s[5] = o; s[6] = m; s[7] = b * c * Math.cos(G); N = m * x - o * w; M = p * w - m * z; L = o * z - p * x; H = Math.sqrt(N * N + M * M + L * L); s[8] = N; s[9] = M; s[10] = L; s[11] = 0; var n = gaussElim(s); f = E[a].x + n[0]; e = E[a].y + n[1]; d = E[a].z + n[2]; addAtom(1, f, e, d); addBond(a, E[0].numatoms); if (l == 1) {
    return;
} s[0] = z; s[1] = x; s[2] = w; s[3] = -b * F / 2; G = (-z * p - x * o - w * m) / (F * c); G = Math.acos(G) - Math.acos(0.5); s[4] = p; s[5] = o; s[6] = m; s[7] = b * c * Math.cos(G); s[8] = N; s[9] = M; s[10] = L; s[11] = 0; debug = "\nRow 1: " + s[0].toFixed(4) + " " + s[1].toFixed(4); debug += " " + s[2].toFixed(4) + " " + s[3].toFixed(4); debug += "\nRow 2: " + s[4].toFixed(4) + " " + s[5].toFixed(4); debug += " " + s[6].toFixed(4) + " " + s[7].toFixed(4); debug += "\nRow 3: " + s[8].toFixed(4) + " " + s[9].toFixed(4); debug += " " + s[10].toFixed(4) + " " + s[11].toFixed(4); n = gaussElim(s); f = E[a].x + n[0]; e = E[a].y + n[1]; d = E[a].z + n[2]; debug = "H2 at: (" + f.toFixed(4) + ", " + e.toFixed(4) + ", " + d.toFixed(4) + ")"; addAtom(1, f, e, d); addBond(a, E[0].numatoms); debug = "atom = " + a + "  i = " + K + "  numatoms = " + E[0].numatoms; debug += "\n" + element(E[E[0].numatoms].atomicnumber, "symbol"); debug += "\nRow 1: " + s[0].toFixed(4) + " " + s[1].toFixed(4); debug += " " + s[2].toFixed(4) + " " + s[3].toFixed(4); debug += "\nRow 2: " + s[4].toFixed(4) + " " + s[5].toFixed(4); debug += " " + s[6].toFixed(4) + " " + s[7].toFixed(4); debug += "\nRow 3: " + s[8].toFixed(4) + " " + s[9].toFixed(4); debug += " " + s[10].toFixed(4) + " " + s[11].toFixed(4); debug += "\nCross: " + N.toFixed(4) + " " + M.toFixed(4) + " " + L.toFixed(4); }
function add3H(a, D, C, z) { var y, s, p, E; var u, q, o, d; var f, e, c, F, H; var x, w, v, n; var K, I, G, l, k, g; var M, L, J, b; var h; var m = new Array(); var t = Mol(); y = t[a].atomicnumber; s = t[D].atomicnumber; p = t[C].atomicnumber; E = element(y, "radius") + element(1, "radius"); u = t[D].x - t[a].x; q = t[D].y - t[a].y; o = t[D].z - t[a].z; d = Math.sqrt(u * u + q * q + o * o); m[0] = u; m[1] = q; m[2] = o; m[3] = -E * d / 3; f = t[C].x - t[D].x; e = t[C].y - t[D].y; c = t[C].z - t[D].z; F = Math.sqrt(f * f + e * e + c * c); H = (-u * f - q * e - o * c) / (d * F); H = Math.acos(-1 / 3) + Math.PI - Math.acos(H); m[4] = f; m[5] = e; m[6] = c; m[7] = E * F * Math.cos(H); x = c * q - e * o; w = f * o - c * u; v = e * u - f * q; n = Math.sqrt(x * x + w * w + v * v); if (n == 0) {
    x = t[a].y;
    w = -t[a].x;
    v = t[a].z;
    n = Math.sqrt(x * x + w * w + v * v);
} m[8] = x; m[9] = w; m[10] = v; m[11] = 0; var B = gaussElim(m); K = t[a].x + B[0]; I = t[a].y + B[1]; G = t[a].z + B[2]; addAtom(1, K, I, G); addBond(a, t[0].numatoms); if (z == 1) {
    return;
} h = t[0].numatoms; b = E / (d * 3); M = t[a].x - u * b; L = t[a].y - q * b; J = t[a].z - o * b; m[0] = t[h].x - M; m[1] = t[h].y - L; m[2] = t[h].z - J; m[3] = -E * E * 4 / 9; l = B[0]; k = B[1]; g = B[2]; m[4] = t[a].x - M; m[5] = t[a].y - L; m[6] = t[a].z - J; m[7] = 0; m[8] = x; m[9] = w; m[10] = v; m[11] = E * n * Math.sqrt(2 / 3); B = gaussElim(m); K = M + B[0]; I = L + B[1]; G = J + B[2]; addAtom(1, K, I, G); addBond(a, t[0].numatoms); if (z == 2) {
    return;
} m[0] = t[h].x - M; m[1] = t[h].y - L; m[2] = t[h].z - J; m[3] = -E * E * 4 / 9; l = B[0]; k = B[1]; g = B[2]; m[4] = t[a].x - M; m[5] = t[a].y - L; m[6] = t[a].z - J; m[7] = 0; n = Math.sqrt(x * x + w * w + v * v); m[8] = x; m[9] = w; m[10] = v; m[11] = -E * n * Math.sqrt(2 / 3); debug = "atom = " + a + "  i = " + D + "  numatoms = " + t[0].numatoms; debug += "\n" + element(t[t[0].numatoms].atomicnumber, "symbol"); debug += "\nRow 1: " + m[0].toFixed(4) + " " + m[1].toFixed(4); debug += " " + m[2].toFixed(4) + " " + m[3].toFixed(4); debug += "\nRow 2: " + m[4].toFixed(4) + " " + m[5].toFixed(4); debug += " " + m[6].toFixed(4) + " " + m[7].toFixed(4); debug += "\nRow 3: " + m[8].toFixed(4) + " " + m[9].toFixed(4); debug += " " + m[10].toFixed(4) + " " + m[11].toFixed(4); debug += "\nCross: " + x.toFixed(4) + " " + w.toFixed(4) + " " + v.toFixed(4); B = gaussElim(m); K = M + B[0]; I = L + B[1]; G = J + B[2]; addAtom(1, K, I, G); addBond(a, t[0].numatoms); }
function gaussElim(f) { var m, k, g, u; var p = new Array(); var n = parseFloat(f[0]); var l = parseFloat(f[1]); var h = parseFloat(f[2]); var v = parseFloat(f[3]); var t = parseFloat(f[4]); var s = parseFloat(f[5]); var q = parseFloat(f[6]); var e = parseFloat(f[7]); var d = parseFloat(f[8]); var b = parseFloat(f[9]); var a = parseFloat(f[10]); var o = parseFloat(f[11]); if ((Math.abs(t) > Math.abs(n)) && (Math.abs(t) > Math.abs(d))) {
    m = n;
    k = l;
    g = h;
    u = v;
    n = t;
    l = s;
    h = q;
    v = e;
    t = m;
    s = k;
    q = g;
    e = u;
} if ((Math.abs(d) > Math.abs(n)) && (Math.abs(d) > Math.abs(t))) {
    m = n;
    k = l;
    g = h;
    u = v;
    n = d;
    l = b;
    h = a;
    v = o;
    d = m;
    b = k;
    a = g;
    o = u;
} if (Math.abs(d) > Math.abs(t)) {
    m = t;
    k = s;
    g = q;
    u = e;
    t = d;
    s = b;
    q = a;
    e = o;
    d = m;
    b = k;
    a = g;
    o = u;
} if ((n != 0) && (t != 0)) {
    factor = -n / t;
    t = 0;
    s = s * factor + l;
    q = q * factor + h;
    e = e * factor + v;
} if ((n != 0) && (d != 0)) {
    factor = -n / d;
    d = 0;
    b = b * factor + l;
    a = a * factor + h;
    o = o * factor + v;
} if (Math.abs(b) > Math.abs(s)) {
    k = s;
    g = q;
    u = e;
    s = b;
    q = a;
    e = o;
    b = k;
    a = g;
    o = u;
} if ((s != 0) && (b != 0)) {
    factor = -s / b;
    b = 0;
    a = a * factor + q;
    o = o * factor + e;
} p[2] = 0; if (a != 0) {
    p[2] = o / a;
} p[1] = 0; if (s != 0) {
    p[1] = (e - (q * p[2])) / s;
} p[0] = 0; if (n != 0) {
    p[0] = (v - (h * p[2]) - (l * p[1])) / n;
} return p; }
function mechanics() { var t, s, q; var b; var v; var m, g; var a = new Array(); var p = new Array(); var l = Mol(); var h = activeWin(""); var d = document.getElementById(h); var o = d.getContext("2d"); var n = d.width; var e = 0.2; var u = 500; var f = 2e-7; Undo("save"); InfoWin("Simple Geometry Optimization starting\n", 1); geomLabel(o, "Simple Geometry Optimization started", n); a = hybridization(); var c = 0; if (c > 0) {
    InfoWin("Hybridization\n");
    for (t = 1; t <= l[0].numatoms; t++) {
        b = l[t].atomicnumber;
        InfoWin(element(b, "symbol") + " has " + a[t].hybrid + " hybrid orbitals\n");
    }
} m = mechEnergy(a); a[0].energy = m; a[0].step = e; p[0] = new energyObject(); p[0].energy = a[0].energy; p[0].step = a[0].step; for (t = 1; t <= l[0].numatoms; t++) {
    p[t] = new mechanicsObject();
    p[t].hybrid = a[t].hybrid;
    p[t].x = a[t].x;
    p[t].y = a[t].y;
    p[t].z = a[t].z;
} v = 0; g = f * 2; InfoWin(0 + ": Energy = " + m.toFixed(8) + "\n"); while ((v < u) && (g > f)) {
    p = optimize(a);
    g = Math.abs(a[0].energy - p[0].energy);
    if (p[0].step > e) {
        p[0].step = e;
    }
    a[0].energy = p[0].energy;
    a[0].step = p[0].step;
    for (t = 1; t <= l[0].numatoms; t++) {
        a[t].hybrid = p[t].hybrid;
        a[t].x = p[t].x;
        a[t].y = p[t].y;
        a[t].z = p[t].z;
    }
    v++;
    if (v < 3) {
        if (g < f) {
            g = f * 2;
        }
    }
    if (g < f) {
        if (p[0].step < e) {
            a[0].step *= 1.5;
            p = optimize(a);
            g = Math.abs(a[0].energy - p[0].energy);
            if (g > f) {
                a[0].energy = p[0].energy;
                a[0].step = p[0].step;
                for (t = 1; t <= l[0].numatoms; t++) {
                    a[t].hybrid = p[t].hybrid;
                    a[t].x = p[t].x;
                    a[t].y = p[t].y;
                    a[t].z = p[t].z;
                }
            }
        }
    }
    InfoWin(v + ": Energy = " + p[0].energy.toFixed(8) + "\n");
    c = 1;
    if ((c > 0) && (v % 5 == 0)) {
        for (t = 1; t <= l[0].numatoms; t++) {
            l[t].x = p[t].x;
            l[t].y = p[t].y;
            l[t].z = p[t].z;
        }
        centerMolecule();
        drawMolecule();
        geomLabel(o, "Simple Geometry Optimization in progress.", n);
    }
} InfoWin("Final Energy at loop " + v + " = " + p[0].energy.toFixed(8) + "\n"); InfoWin("Geometry Optimization complete.\n"); if (v >= u) {
    InfoWin("Too many steps. Optimization may not be complete.\n");
} for (t = 1; t <= l[0].numatoms; t++) {
    l[t].x = p[t].x;
    l[t].y = p[t].y;
    l[t].z = p[t].z;
} centerMolecule(); drawMolecule(); }
function mechanicsObject() { this.hybrid = 0; this.x = 0; this.y = 0; this.z = 0; }
function energyObject() { this.energy = 0; this.rstep = 0; this.astep = 0; }
function distance(f, g, e) { var c = f[g].x - f[e].x; var b = f[g].y - f[e].y; var a = f[g].z - f[e].z; var d = Math.sqrt(c * c + b * b + a * a); return d; }
function angle(f, l, k, h) { var o = f[l].x - f[k].x; var n = f[l].y - f[k].y; var m = f[l].z - f[k].z; var b = Math.sqrt(o * o + n * n + m * m); var g = f[h].x - f[k].x; var e = f[h].y - f[k].y; var d = f[h].z - f[k].z; var a = Math.sqrt(g * g + e * e + d * d); var c = (o * g + n * e + m * d) / (b * a); if (c > 1) {
    c = 1;
} if (c < -1) {
    c = -1;
} c = Math.acos(c) * 180 / Math.PI; return c; }
function dihedral(t, g, e, c, a) { var s, q, p; var o, n, m; var z, x, v; var l, y, w, u; var h, f, d, b; o = t[g].x - t[e].x; n = t[g].y - t[e].y; m = t[g].z - t[e].z; z = t[c].x - t[e].x; x = t[c].y - t[e].y; v = t[c].z - t[e].z; y = n * v - m * x; w = m * z - o * v; u = o * x - n * z; l = Math.sqrt(y * y + w * w + u * u); o = t[a].x - t[c].x; n = t[a].y - t[c].y; m = t[a].z - t[c].z; f = m * x - n * v; d = o * v - m * z; b = n * z - o * x; h = Math.sqrt(f * f + d * d + b * b); ang = (-y * f - w * d - u * b) / (l * h); if (ang > 1) {
    ang = 1;
} if (ang < -1) {
    ang = -1;
} ang = Math.acos(ang) * 180 / Math.PI; return ang; }
function hybridization() { var e, d, c; var g; var b = new Array(); var a = Mol(); var f = BondMatrix(); b[0] = new energyObject(); b[0].energy = 0; b[0].step = 0; for (e = 1; e <= a[0].numatoms; e++) {
    b[e] = new mechanicsObject();
    b[e].hybrid = 0;
    b[e].x = a[e].x;
    b[e].y = a[e].y;
    b[e].z = a[e].z;
} for (e = 1; e <= a[0].numatoms; e++) {
    g = element(a[e].atomicnumber, "valence");
    switch (g) {
        case 1:
        case 2:
        case 3:
            b[e].hybrid = f[e][0];
            break;
        default:
            b[e].hybrid = g + f[e][0] - 4;
            break;
    }
    while ((b[e].hybrid > f[e][0]) && (b[e].hybrid >= 5)) {
        b[e].hybrid = b[e].hybrid - 1;
    }
} for (e = 1; e <= a[0].numatoms; e++) {
    if ((b[e].hybrid == 4) && (f[e][0] < 4)) {
        for (d = 1; d <= a[0].numatoms; d++) {
            c = f[e][d];
            if (c > 0) {
                if (b[c].hybrid == 3) {
                    b[e].hybrid = 3;
                }
            }
        }
    }
} return b; }
function mechEnergy(v) { var K, J, I; var z, M, L, D, t; var o, n, m; var d, c, b, G, f; var P, O, B; var s, y, x, w; var q, l, h, e; var F; var a = Math.acos(-1 / 3) * 180 / Math.PI; var u = 0; var C = Mol(); var g = BondMatrix(); var H = 20000; var Q = 10; var N = 5; var E = 500; DEBUG = 1; if (DEBUG > 0) {
    var p = 0;
    for (K = 1; K <= C[0].numatoms; K++) {
        p += v[K].hybrid;
    }
    if (p < C[0].numatoms) {
        InfoWin("*** Too few hybrid orbitals (" + p + ") returned at end of optimize\n");
    }
} for (K = 1; K <= C[0].numatoms; K++) {
    n = element(C[K].atomicnumber, "radius");
    if (v[K].hybrid == 3) {
        n -= 0.05;
    }
    if (v[K].hybrid == 2) {
        n -= 0.1;
    }
    for (J = 1; J <= C[0].numatoms; J++) {
        if (g[K][J] > 0) {
            I = J;
            m = element(C[I].atomicnumber, "radius");
            if (v[I].hybrid == 3) {
                m -= 0.05;
            }
            if (v[I].hybrid == 2) {
                m -= 0.1;
            }
            o = n + m;
            d = v[K].x - v[I].x;
            c = v[K].y - v[I].y;
            b = v[K].z - v[I].z;
            G = Math.sqrt(d * d + c * c + b * b);
            u += H * (G - o) * (G - o);
        }
    }
} for (K = 1; K <= C[0].numatoms; K++) {
    if (v[K].hybrid > 1) {
        for (J = 1; J < C[0].numatoms; J++) {
            if (g[K][J] > 0) {
                P = J;
                y = v[P].x - v[K].x;
                x = v[P].y - v[K].y;
                w = v[P].z - v[K].z;
                s = Math.sqrt(y * y + x * x + w * w);
                for (I = J + 1; I <= C[0].numatoms; I++) {
                    if (g[K][I] > 0) {
                        O = I;
                        l = v[O].x - v[K].x;
                        h = v[O].y - v[K].y;
                        e = v[O].z - v[K].z;
                        q = Math.sqrt(l * l + h * h + e * e);
                        F = (y * l + x * h + w * e) / (s * q);
                        if (F > 1) {
                            F = 1;
                        }
                        if (F < -1) {
                            F = -1;
                        }
                        F = Math.acos(F) * 180 / Math.PI;
                        switch (v[K].hybrid) {
                            case 2:
                                u += Q * (F - 180) * (F - 180);
                                break;
                            case 3:
                                u += Q * (F - 120) * (F - 120);
                                break;
                            case 4:
                                u += Q * (F - a) * (F - a);
                                break;
                            case 5:
                            case 6:
                                if (F < 100) {
                                    u += Q * (F - 90) * (F - 90);
                                }
                                break;
                        }
                    }
                }
            }
        }
    }
} for (K = 1; K < C[0].numatoms; K++) {
    if (v[K].hybrid == 4) {
        for (z = K + 1; z <= C[0].numatoms; z++) {
            if ((g[K][z] > 0) && (v[z].hybrid == 4)) {
                J = z;
                for (M = 1; M <= C[0].numatoms; M++) {
                    if ((g[K][M] > 0) && (M != J) && (M != K)) {
                        D = M;
                        for (L = 1; L <= C[J].numatoms; L++) {
                            if ((g[J][L] > 0) && (L != J) && (L != K) && (L != D)) {
                                t = C[J].bonds[L];
                                F = Math.abs(dihedral(v, D, K, J, t));
                                while (F > 120) {
                                    F -= 120;
                                }
                                u += N * (F - 60) * (F - 60);
                            }
                        }
                    }
                }
            }
        }
    }
} for (K = 1; K < C[0].numatoms; K++) {
    if (v[K].hybrid == 3) {
        for (z = K + 1; z <= C[K].numatoms; z++) {
            if ((g[K][z] > 0) && (v[J].hybrid == 3)) {
                J = z;
                for (M = 1; M <= C[K].numatoms; M++) {
                    if ((g[K][M] > 0) && (M != J) && (M != K)) {
                        D = M;
                        for (L = 1; L <= C[J].numatoms; L++) {
                            if ((g[J][L] > 0) && (L != K) && (L != J) && (L != D)) {
                                t = L;
                                F = Math.abs(dihedral(v, D, K, J, t));
                                if (F > 180) {
                                    F -= 180;
                                }
                                if (F > 135) {
                                    F = 180 - F;
                                }
                                u += N * F * F;
                            }
                        }
                    }
                }
            }
        }
    }
} for (K = 1; K < C[0].numatoms; K++) {
    n = element(C[K].atomicnumber, "radius");
    for (J = K + 1; J <= C[0].numatoms; J++) {
        m = element(C[J].atomicnumber, "radius");
        G = distance(v, K, J);
        if (G < 0.1) {
            G = 0.1;
        }
        G = G / (n + m);
        u += E / (G * G * G * G * G * G);
    }
} return u; }
function changexyz(n) { var e = Mol(); var w, u, s; var l; var y = []; var c, h, g, f; var p, o, m; var a; var v, t, q; var x; var z = n[0].step; var b = 0; if (b > 0) {
    InfoWin("Hybridization\n");
    for (w = 1; w <= e[0].numatoms; w++) {
        Z = e[w].atomicnumber;
        InfoWin(element(Z, "symbol") + " has " + n[w].hybrid + " hybrid orbitals\n");
    }
} for (w = 0; w <= e[0].numatoms; w++) {
    y[w] = [0, 0, 0];
} var d = new Array(); d[0] = new energyObject(); d[0].energy = n[0].energy; d[0].step = n[0].step; for (w = 1; w <= e[0].numatoms; w++) {
    d[w] = new mechanicsObject();
    d[w].hybrid = n[w].hybrid;
    d[w].x = n[w].x;
    d[w].y = n[w].y;
    d[w].z = n[w].z;
} c = mechEnergy(d); for (w = 1; w <= e[0].numatoms; w++) {
    v = d[w].x;
    t = d[w].y;
    q = d[w].z;
    for (l = 0; l < 6; l++) {
        p = 0;
        o = 0;
        m = 0;
        h = c;
        g = c;
        f = c;
        (l % 2) ? a = 1 : a = -1;
        switch (l) {
            case 0:
            case 1:
                d[w].x = v + a * z;
                Energy = mechEnergy(d);
                while ((Energy > c) && (a > 0.1)) {
                    a *= 0.75;
                    d[w].x = v + a * z;
                    Energy = mechEnergy(d);
                }
                if (Energy < h) {
                    p = a;
                }
                d[w].x = v;
                y[w][0] = p * z;
                break;
            case 2:
            case 3:
                d[w].y = t + a * z;
                Energy = mechEnergy(d);
                while ((Energy > c) && (a > 0.1)) {
                    a *= 0.75;
                    d[w].y = t + a * z;
                    Energy = mechEnergy(d);
                }
                if (Energy < g) {
                    o = a;
                }
                d[w].y = t;
                y[w][1] = o * z;
                break;
            case 4:
            case 5:
                d[w].z = q + a * z;
                Energy = mechEnergy(d);
                while ((Energy > c) && (a > 0.1)) {
                    a *= 0.75;
                    d[w].z = q + a * z;
                    Energy = mechEnergy(d);
                }
                if (Energy < f) {
                    m = a;
                }
                d[w].z = q;
                y[w][2] = m * z;
                break;
        }
    }
} return y; }
function optimize(n) { var u, t, s; var o; var l; var c; var d; var w, f; var m; var v = new Array(); var q = new Array(); var g = Mol(); var a = 0.001; var e = n[0].step; var b = n[0].energy; DEBUG = 1; if (DEBUG > 0) {
    var h = mechEnergy(n);
    if (h != b) {
        InfoWin("*** Call to mechEnergy changed energy from " + b + " to " + h + "\n");
    }
    var p = 0;
    for (u = 1; u <= g[0].numatoms; u++) {
        p += n[u].hybrid;
    }
    if (p < g[0].numatoms) {
        InfoWin("*** Too few hybrid orbitals (" + p + ")\n");
    }
} for (u = 0; u <= g[0].numatoms; u++) {
    v[u] = [0, 0, 0];
} v = changexyz(n); m = 0; for (u = 0; u <= g[0].numatoms; u++) {
    for (t = 0; t < 3; t++) {
        if (Math.abs(v[u][t]) > m) {
            m = Math.abs(v[u][t]);
        }
    }
} d = n[0].energy; w = 0; f = 1; c = trialEnergy(n, v, f); while ((c > d) && (f > 0.002)) {
    f *= 0.75;
    c = trialEnergy(n, v, f);
} if (c < d) {
    w = f;
    d = c;
} l = (w + 0.5) * (n[0].step + m); if (l < a) {
    l = a;
} q[0] = new energyObject(); q[0].energy = d; q[0].step = l; for (u = 1; u <= g[0].numatoms; u++) {
    q[u] = new mechanicsObject();
    q[u].hybrid = n[u].hybrid;
    q[u].x = n[u].x + w * v[u][0];
    q[u].y = n[u].y + w * v[u][1];
    q[u].z = n[u].z + w * v[u][2];
} DEBUG = 0; if (DEBUG > 0) {
    for (u = 0; u <= g[0].numatoms; u++) {
        InfoWin("Change in coordinates = (");
        for (t = 0; t < 3; t++) {
            InfoWin(v[u][t].toFixed(5));
            if (t < 2) {
                InfoWin(", ");
            }
        }
        InfoWin(")\n");
    }
    InfoWin("--- Max change = " + m.toFixed(5) + "\n");
} return (q); }
function trialEnergy(e, f, c) { var b; var d = new Array(); var a = Mol(); d[0] = new energyObject(); d[0].energy = e[0].energy; d[0].step = e[0].step; for (b = 1; b <= a[0].numatoms; b++) {
    d[b] = new mechanicsObject();
    d[b].hybrid = e[b].hybrid;
    d[b].x = e[b].x + c * f[b][0];
    d[b].y = e[b].y + c * f[b][1];
    d[b].z = e[b].z + c * f[b][2];
} return mechEnergy(d); }
;
//# sourceMappingURL=ch5m3d.js.map