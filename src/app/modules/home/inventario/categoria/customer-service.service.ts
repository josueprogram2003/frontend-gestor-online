import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  getData() {
    return [
        {
            id: 1000,
            name: 'James Butt',
            country: {
                name: 'Algeria',
                code: 'dz'
            },
            company: 'Benton, John B Jr',
            date: '2015-09-13',
            status: 'unqualified',
            verified: true,
            activity: 17,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 70663
        },
        {
            id: 1001,
            name: 'Josephine Darakjy',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Chanay, Jeffrey A Esq',
            date: '2019-02-09',
            status: 'proposal',
            verified: true,
            activity: 0,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 82429
        },
        {
            id: 1002,
            name: 'Art Venere',
            country: {
                name: 'Panama',
                code: 'pa'
            },
            company: 'Chemel, James L Cpa',
            date: '2017-05-13',
            status: 'qualified',
            verified: false,
            activity: 63,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 28334
        },
        {
            id: 1003,
            name: 'Lenna Paprocki',
            country: {
                name: 'Slovenia',
                code: 'si'
            },
            company: 'Feltz Printing Service',
            date: '2020-09-15',
            status: 'new',
            verified: false,
            activity: 37,
            representative: {
                name: 'Xuxue Feng',
                image: 'xuxuefeng.png'
            },
            balance: 88521
        },
        {
            id: 1004,
            name: 'Donette Foller',
            country: {
                name: 'South Africa',
                code: 'za'
            },
            company: 'Printing Dimensions',
            date: '2016-05-20',
            status: 'proposal',
            verified: true,
            activity: 33,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 93905
        },
        {
            id: 1005,
            name: 'Simona Morasca',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Chapman, Ross E Esq',
            date: '2018-02-16',
            status: 'qualified',
            verified: false,
            activity: 68,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 50041
        },
        {
            id: 1006,
            name: 'Mitsue Tollner',
            country: {
                name: 'Paraguay',
                code: 'py'
            },
            company: 'Morlong Associates',
            date: '2018-02-19',
            status: 'renewal',
            verified: true,
            activity: 54,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 58706
        },
        {
            id: 1007,
            name: 'Leota Dilliard',
            country: {
                name: 'Serbia',
                code: 'rs'
            },
            company: 'Commercial Press',
            date: '2019-08-13',
            status: 'renewal',
            verified: true,
            activity: 69,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 26640
        },
        {
            id: 1008,
            name: 'Sage Wieser',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Truhlar And Truhlar Attys',
            date: '2018-11-21',
            status: 'unqualified',
            verified: true,
            activity: 76,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 65369
        },
        {
            id: 1009,
            name: 'Kris Marrier',
            country: {
                name: 'Mexico',
                code: 'mx'
            },
            company: 'King, Christopher A Esq',
            date: '2015-07-07',
            status: 'proposal',
            verified: false,
            activity: 3,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 63451
        },
        {
            id: 1010,
            name: 'Minna Amigon',
            country: {
                name: 'Romania',
                code: 'ro'
            },
            company: 'Dorl, James J Esq',
            date: '2018-11-07',
            status: 'qualified',
            verified: false,
            activity: 38,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 71169
        },
        {
            id: 1011,
            name: 'Abel Maclead',
            country: {
                name: 'Singapore',
                code: 'sg'
            },
            company: 'Rangoni Of Florence',
            date: '2017-03-11',
            status: 'qualified',
            verified: true,
            activity: 87,
            representative: {
                name: 'Bernardo Dominic',
                image: 'bernardodominic.png'
            },
            balance: 96842
        },
        {
            id: 1212,
            name: 'Beckie Silvestrini',
            country: {
                name: 'Poland',
                code: 'pl'
            },
            company: 'A All American Travel Inc',
            date: '2016-11-26',
            status: 'renewal',
            verified: true,
            activity: 81,
            representative: {
                name: 'Xuxue Feng',
                image: 'xuxuefeng.png'
            },
            balance: 30549
        },
        {
            id: 1213,
            name: 'Rebecka Gesick',
            country: {
                name: 'Philippines',
                code: 'ph'
            },
            company: 'Polykote Inc',
            date: '2019-06-22',
            status: 'renewal',
            verified: true,
            activity: 45,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 51738
        },
        {
            id: 1214,
            name: 'Frederica Blunk',
            country: {
                name: 'Lithuania',
                code: 'lt'
            },
            company: 'Jets Cybernetics',
            date: '2019-06-07',
            status: 'renewal',
            verified: true,
            activity: 56,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 13111
        },
        {
            id: 1215,
            name: 'Glen Bartolet',
            country: {
                name: 'Germany',
                code: 'de'
            },
            company: 'Metlab Testing Services',
            date: '2015-02-13',
            status: 'proposal',
            verified: true,
            activity: 99,
            representative: {
                name: 'Stephen Shaw',
                image: 'stephenshaw.png'
            },
            balance: 85802
        },
        {
            id: 1216,
            name: 'Freeman Gochal',
            country: {
                name: 'Slovenia',
                code: 'si'
            },
            company: 'Kellermann, William T Esq',
            date: '2019-08-27',
            status: 'negotiation',
            verified: false,
            activity: 2,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 89221
        },
        {
            id: 1217,
            name: 'Vincent Meinerding',
            country: {
                name: 'United States',
                code: 'us'
            },
            company: 'Arturi, Peter D Esq',
            date: '2018-06-18',
            status: 'new',
            verified: true,
            activity: 58,
            representative: {
                name: 'Bernardo Dominic',
                image: 'bernardodominic.png'
            },
            balance: 32661
        },
        {
            id: 1218,
            name: 'Rima Bevelacqua',
            country: {
                name: 'Taiwan',
                code: 'tw'
            },
            company: 'Mcauley Mfg Co',
            date: '2019-05-18',
            status: 'new',
            verified: true,
            activity: 31,
            representative: {
                name: 'Stephen Shaw',
                image: 'stephenshaw.png'
            },
            balance: 18809
        },
        {
            id: 1341,
            name: 'Ernest Syrop',
            country: {
                name: 'Jamaica',
                code: 'jm'
            },
            company: 'Grant Family Health Center',
            date: '2016-10-06',
            status: 'unqualified',
            verified: true,
            activity: 90,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 22419
        },
        {
            id: 1342,
            name: 'Nobuko Halsey',
            country: {
                name: 'Argentina',
                code: 'ar'
            },
            company: 'Goeman Wood Products Inc',
            date: '2019-01-02',
            status: 'unqualified',
            verified: true,
            activity: 72,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 86006
        },
        {
            id: 1343,
            name: 'Lavonna Wolny',
            country: {
                name: 'Czech Republic',
                code: 'cz'
            },
            company: 'Linhares, Kenneth A Esq',
            date: '2019-03-09',
            status: 'negotiation',
            verified: true,
            activity: 77,
            representative: {
                name: 'Bernardo Dominic',
                image: 'bernardodominic.png'
            },
            balance: 40641
        },
        {
            id: 1344,
            name: 'Lashaunda Lizama',
            country: {
                name: 'Ecuador',
                code: 'ec'
            },
            company: 'Earnhardt Printing',
            date: '2016-02-16',
            status: 'negotiation',
            verified: true,
            activity: 76,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 73493
        },
        {
            id: 1345,
            name: 'Mariann Bilden',
            country: {
                name: 'Argentina',
                code: 'ar'
            },
            company: 'H P G Industrys Inc',
            date: '2019-12-15',
            status: 'proposal',
            verified: true,
            activity: 20,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 87704
        },
        {
            id: 1346,
            name: 'Helene Rodenberger',
            country: {
                name: 'Bolivia',
                code: 'bo'
            },
            company: 'Bailey Transportation Prod Inc',
            date: '2016-09-22',
            status: 'unqualified',
            verified: true,
            activity: 26,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 19662
        },
        {
            id: 1347,
            name: 'Roselle Estell',
            country: {
                name: 'Hungary',
                code: 'hu'
            },
            company: 'Mcglynn Bliss Pc',
            date: '2016-11-25',
            status: 'negotiation',
            verified: true,
            activity: 80,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 80534
        },
        {
            id: 1348,
            name: 'Samira Heintzman',
            country: {
                name: 'Vietnam',
                code: 'vn'
            },
            company: 'Mutual Fish Co',
            date: '2019-11-26',
            status: 'qualified',
            verified: true,
            activity: 70,
            representative: {
                name: 'Xuxue Feng',
                image: 'xuxuefeng.png'
            },
            balance: 19473
        },
        {
            id: 1349,
            name: 'Margart Meisel',
            country: {
                name: 'Serbia',
                code: 'rs'
            },
            company: 'Yeates, Arthur L Aia',
            date: '2019-10-27',
            status: 'negotiation',
            verified: true,
            activity: 77,
            representative: {
                name: 'Xuxue Feng',
                image: 'xuxuefeng.png'
            },
            balance: 89796
        },
        {
            id: 1350,
            name: 'Kristofer Bennick',
            country: {
                name: 'Tunisia',
                code: 'tn'
            },
            company: 'Logan, Ronald J Esq',
            date: '2016-02-13',
            status: 'proposal',
            verified: true,
            activity: 5,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 54429
        },
        {
            id: 1351,
            name: 'Weldon Acuff',
            country: {
                name: 'Estonia',
                code: 'ee'
            },
            company: 'Advantage Martgage Company',
            date: '2019-10-22',
            status: 'qualified',
            verified: true,
            activity: 38,
            representative: {
                name: 'Bernardo Dominic',
                image: 'bernardodominic.png'
            },
            balance: 16134
        },
        {
            id: 1352,
            name: 'Shalon Shadrick',
            country: {
                name: 'Iceland',
                code: 'is'
            },
            company: 'Germer And Gertz Llp',
            date: '2015-01-03',
            status: 'proposal',
            verified: true,
            activity: 66,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 9173
        },
        {
            id: 1353,
            name: 'Denise Patak',
            country: {
                name: 'Uruguay',
                code: 'uy'
            },
            company: 'Spence Law Offices',
            date: '2016-11-03',
            status: 'qualified',
            verified: true,
            activity: 77,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 42857
        },
        {
            id: 1354,
            name: 'Louvenia Beech',
            country: {
                name: 'Ecuador',
                code: 'ec'
            },
            company: 'John Ortiz Nts Therapy Center',
            date: '2016-04-11',
            status: 'renewal',
            verified: true,
            activity: 62,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 54300
        },
        {
            id: 1355,
            name: 'Audry Yaw',
            country: {
                name: 'Portugal',
                code: 'pt'
            },
            company: 'Mike Uchrin Htg & Air Cond Inc',
            date: '2017-11-22',
            status: 'unqualified',
            verified: true,
            activity: 12,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 94652
        },
        {
            id: 1356,
            name: 'Kristel Ehmann',
            country: {
                name: 'Israel',
                code: 'il'
            },
            company: 'Mccoy, Joy Reynolds Esq',
            date: '2016-06-23',
            status: 'new',
            verified: true,
            activity: 67,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 88295
        },
        {
            id: 1357,
            name: 'Vincenza Zepp',
            country: {
                name: 'Pakistan',
                code: 'pk'
            },
            company: 'Kbor 1600 Am',
            date: '2016-01-04',
            status: 'qualified',
            verified: true,
            activity: 25,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 92710
        },
        {
            id: 1358,
            name: 'Elouise Gwalthney',
            country: {
                name: 'Netherlands',
                code: 'nl'
            },
            company: 'Quality Inn Northwest',
            date: '2016-04-05',
            status: 'proposal',
            verified: true,
            activity: 14,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 25145
        },
        {
            id: 1359,
            name: 'Venita Maillard',
            country: {
                name: 'Poland',
                code: 'pl'
            },
            company: 'Wallace Church Assoc Inc',
            date: '2016-03-23',
            status: 'negotiation',
            verified: true,
            activity: 69,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 61630
        },
        {
            id: 1360,
            name: 'Kasandra Semidey',
            country: {
                name: 'Indonesia',
                code: 'id'
            },
            company: 'Can Tron',
            date: '2015-09-03',
            status: 'new',
            verified: true,
            activity: 25,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 66134
        },
        {
            id: 1361,
            name: 'Xochitl Discipio',
            country: {
                name: 'Slovakia',
                code: 'sk'
            },
            company: 'Ravaal Enterprises Inc',
            date: '2016-11-14',
            status: 'qualified',
            verified: true,
            activity: 47,
            representative: {
                name: 'Stephen Shaw',
                image: 'stephenshaw.png'
            },
            balance: 14822
        },
        {
            id: 1362,
            name: 'Maile Linahan',
            country: {
                name: 'Nigeria',
                code: 'ng'
            },
            company: 'Thompson Steel Company Inc',
            date: '2016-07-24',
            status: 'new',
            verified: true,
            activity: 0,
            representative: {
                name: 'Bernardo Dominic',
                image: 'bernardodominic.png'
            },
            balance: 17759
        },
        {
            id: 1363,
            name: 'Krissy Rauser',
            country: {
                name: 'Thailand',
                code: 'th'
            },
            company: 'Anderson, Mark A Esq',
            date: '2020-03-06',
            status: 'renewal',
            verified: true,
            activity: 33,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 14922
        },
        {
            id: 1364,
            name: 'Pete Dubaldi',
            country: {
                name: 'Bolivia',
                code: 'bo'
            },
            company: 'Womack & Galich',
            date: '2015-11-22',
            status: 'unqualified',
            verified: true,
            activity: 31,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 96575
        },
        {
            id: 1365,
            name: 'Linn Paa',
            country: {
                name: 'Bolivia',
                code: 'bo'
            },
            company: 'Valerie & Company',
            date: '2015-08-12',
            status: 'unqualified',
            verified: true,
            activity: 26,
            representative: {
                name: 'Stephen Shaw',
                image: 'stephenshaw.png'
            },
            balance: 5847
        },
        {
            id: 1366,
            name: 'Paris Wide',
            country: {
                name: 'Uruguay',
                code: 'uy'
            },
            company: 'Gehring Pumps Inc',
            date: '2018-10-21',
            status: 'proposal',
            verified: true,
            activity: 90,
            representative: {
                name: 'Elwin Sharvill',
                image: 'elwinsharvill.png'
            },
            balance: 22929
        },
        {
            id: 1367,
            name: 'Wynell Dorshorst',
            country: {
                name: 'Romania',
                code: 'ro'
            },
            company: 'Haehnel, Craig W Esq',
            date: '2018-05-10',
            status: 'new',
            verified: true,
            activity: 60,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 31837
        },
        {
            id: 1368,
            name: 'Quentin Birkner',
            country: {
                name: 'Senegal',
                code: 'sn'
            },
            company: 'Spoor Behrins Campbell & Young',
            date: '2019-02-03',
            status: 'unqualified',
            verified: true,
            activity: 68,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 27095
        },
        {
            id: 1369,
            name: 'Regenia Kannady',
            country: {
                name: 'Portugal',
                code: 'pt'
            },
            company: 'Ken Jeter Store Equipment Inc',
            date: '2018-07-13',
            status: 'new',
            verified: true,
            activity: 74,
            representative: {
                name: 'Xuxue Feng',
                image: 'xuxuefeng.png'
            },
            balance: 43696
        },
        {
            id: 1370,
            name: 'Sheron Louissant',
            country: {
                name: 'France',
                code: 'fr'
            },
            company: 'Potter, Brenda J Cpa',
            date: '2017-01-04',
            status: 'qualified',
            verified: true,
            activity: 86,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 79897
        },
        {
            id: 1371,
            name: 'Izetta Funnell',
            country: {
                name: 'Hong Kong',
                code: 'hk'
            },
            company: 'Baird Kurtz & Dobson',
            date: '2019-11-05',
            status: 'new',
            verified: true,
            activity: 67,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 27264
        },
        {
            id: 1372,
            name: 'Rodolfo Butzen',
            country: {
                name: 'Taiwan',
                code: 'tw'
            },
            company: 'Minor, Cynthia A Esq',
            date: '2020-09-25',
            status: 'proposal',
            verified: true,
            activity: 17,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 16490
        },
        {
            id: 1373,
            name: 'Zona Colla',
            country: {
                name: 'Switzerland',
                code: 'ch'
            },
            company: 'Solove, Robert A Esq',
            date: '2020-10-08',
            status: 'negotiation',
            verified: true,
            activity: 64,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 21990
        },
        {
            id: 1374,
            name: 'Serina Zagen',
            country: {
                name: 'Paraguay',
                code: 'py'
            },
            company: 'Mark Ii Imports Inc',
            date: '2018-07-14',
            status: 'negotiation',
            verified: true,
            activity: 46,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 11918
        },
        {
            id: 1375,
            name: 'Paz Sahagun',
            country: {
                name: 'Colombia',
                code: 'co'
            },
            company: 'White Sign Div Ctrl Equip Co',
            date: '2018-03-23',
            status: 'negotiation',
            verified: true,
            activity: 49,
            representative: {
                name: 'Elwin Sharvill',
                image: 'elwinsharvill.png'
            },
            balance: 13268
        },
        {
            id: 1376,
            name: 'Markus Lukasik',
            country: {
                name: 'Burkina Faso',
                code: 'bf'
            },
            company: 'M & M Store Fixtures Co Inc',
            date: '2018-03-21',
            status: 'negotiation',
            verified: true,
            activity: 23,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 15941
        },
        {
            id: 1377,
            name: 'Jaclyn Bachman',
            country: {
                name: 'Slovakia',
                code: 'sk'
            },
            company: 'Judah Caster & Wheel Co',
            date: '2020-10-20',
            status: 'new',
            verified: true,
            activity: 10,
            representative: {
                name: 'Stephen Shaw',
                image: 'stephenshaw.png'
            },
            balance: 53132
        },
        {
            id: 1378,
            name: 'Cyril Daufeldt',
            country: {
                name: 'India',
                code: 'in'
            },
            company: 'Galaxy International Inc',
            date: '2019-02-11',
            status: 'qualified',
            verified: true,
            activity: 79,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 47531
        },
        {
            id: 1379,
            name: 'Gayla Schnitzler',
            country: {
                name: 'Brazil',
                code: 'br'
            },
            company: 'Sigma Corp Of America',
            date: '2017-09-15',
            status: 'new',
            verified: true,
            activity: 14,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 88950
        },
        {
            id: 1380,
            name: 'Erick Nievas',
            country: {
                name: 'Argentina',
                code: 'ar'
            },
            company: 'Soward, Anne Esq',
            date: '2018-10-07',
            status: 'proposal',
            verified: false,
            activity: 28,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 88497
        },

    ];
}

constructor(private http: HttpClient) {}

getCustomersMini() {
    return Promise.resolve(this.getData().slice(0, 5));
}

getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
}

getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
}

getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
}

getCustomersXLarge() {
    return Promise.resolve(this.getData());
}

getCustomers(params?: any) {
    return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
}
}
