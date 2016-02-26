/*
Array ficha
ID == EQUIVALENTE
 0 == Nome
 1 == TPD Força
 2 == TPD Poder de Fogo
 3 == CAR Força
 4 == CAR Habilidade
 5 == CAR Resistência
 6 == CAR Armadura
 7 == CAR Poder de Fogo 
 8 == FOC Água
 9 == FOC Ar
10 == FOC Fogo
11 == FOC Luz
12 == FOC Terra
13 == FOC Trevas
14 == Pontos de Vida
15 == Pontos de Mana
16 == Magias Conhecidas
17 == Itens
18 == Dinheiro
19 == História
20 == Experiência
*/
var pontos = 0
var ficha = new Array()
var vantagem = new Array()
var valorV = new Array()
var desvantagem = new Array()
var valorD = new Array()
var cont = new Array()
cont[0] = 1
cont[1] = 1
var va = new Array()
va[0] = 0; va[1] = 0; va[2] = 1
va[3] = 0; va[4] = 0; va[5] = 1

function marcar(campo, id, total) {
	ficha[campo] = id
	while ( id > 0 ) {
		divM(campo, id);
		id -= 1
	}
	up()
}
function desmarcar(campo, id, total) {
	ficha[campo] = id-1
	while ( id <= total ) {
		divD(campo, id);
		id += 1
	}
	up()
}
function divM(campo, id) {
	var header = document.getElementById(String(campo)+id)
	header.innerHTML = header.innerHTML.replace('id="a"','id="b"')
	header.innerHTML = header.innerHTML.replace('"marcar','"desmarcar')
}
function divD(campo, id) {
	var header = document.getElementById(String(campo)+id)
	header.innerHTML = header.innerHTML.replace('id="b"','id="a"')
	header.innerHTML = header.innerHTML.replace('"desmarcar','"marcar')
}
function abrir(){
	window.alert('Função Abrir, chamada.')}
function salvar(){
	vantArray()
	window.alert('function Salvar, foi chamada')
}
function criarVanDes(vanDBody){
	var local = 0
	if(vanDBody == 'vantbody'){cont[0]+=1;local=cont[0]}
	if(vanDBody == 'dvanbody'){cont[1]+=1;local=cont[1]}
	var cheio = '<table><th><input type="text" id="iT'+vanDBody+local+'"></th><th><input type="number" style="width:45px" id="iN'+vanDBody+local+'">'
	var menos = '</th><th><div class="bmenos" onClick="apagarVanDes('+"'"+vanDBody+"'"+')"></div></th></table>'
	var caixaDV = document.getElementById(vanDBody+local)
	caixaDV.innerHTML=cheio+menos
	up()
}
function apagarVanDes(vanDBody, a){
	var local = 0
	if(vanDBody == 'vantbody'){local=cont[0];cont[0]-=1}
	if(vanDBody == 'dvanbody'){local=cont[1];cont[1]-=1}
	var vazio = '<div class="vazio" onClick="criarVanDes('+"'"+vanDBody+"'"+')"></div>'
	var caixaDV = document.getElementById(vanDBody+local)
	caixaDV.innerHTML=vazio
	up()
}
function inputArray(){
	ficha[0] = document.getElementById(0).value
	ficha[1] = document.getElementById(1).value
	ficha[2] = document.getElementById(2).value
	ficha[16] = document.getElementById(16).value
	ficha[17] = document.getElementById(17).value
	ficha[18] = document.getElementById(18).value
	ficha[19] = document.getElementById(19).value
}
function vantArray(){
	while(va[2] <= cont[0]){
		vantagem[va[0]] = document.getElementById('iTvantbody'+va[2]).value
		va[0] += 1
		valorV[va[1]] = document.getElementById('iNvantbody'+va[2]).value
		va[1] += 1
		va[2] += 1
	}
	while(va[5] <= cont[1]){
		desvantagem[va[3]] = document.getElementById('iTdvanbody'+va[5]).value
		va[3] += 1
		valorD[va[4]] = document.getElementById('iNdvanbody'+va[5]).value
		va[4] += 1
		va[5] += 1
	}
}
function pegarTudo(){
	inputArray()
	vantArray()
	
}
function up(){
	vantArray()
	inputArray()
}