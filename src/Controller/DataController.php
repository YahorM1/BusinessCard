<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DataController extends AbstractController
{
    #[Route('/', name: 'app_data')]
    public function index(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('index.html.twig', []);
    }
}



///**
// * * @param String $login*
// * * @return JsonResponse *
// * @Route("/api/data/{login}", name="api_event_get", methods={"GET"})
// */
//
//public function apiDataFromLdap($login): JsonResponse {
//
//    return new JsonResponse([
//        'name' => 'Jan',
//        'surname' => 'Kowalski',
//        'position' => 'profesor uniwersytetu',
//        'unit_1' => 'Wydział Matematyki i Informatyki',
//        'unit_2' => 'Katedra Teorii Prawdopodobieństwa',
//        'address_1' => 'ul. Chopina 12/18',
//        'address_2' => '87-100 Toruń',
//        'phone' => '+48 56 622 27 59',
//        'email' => 'example@umk.pl',
//
//
//    ]);
//
//}
