<?php

namespace App\Entity;

use App\Repository\UserEntityRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserEntityRepository::class)]
class UserEntity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $surname = null;

    #[ORM\Column(length: 255)]
    private ?string $position = null;

    #[ORM\Column(length: 255)]
    private ?string $unit_1 = null;

    #[ORM\Column(length: 255)]
    private ?string $unit_2 = null;

    #[ORM\Column(length: 255)]
    private ?string $address_1 = null;

    #[ORM\Column(length: 255)]
    private ?string $address_2 = null;

    #[ORM\Column(length: 255)]
    private ?string $phone = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getSurname(): ?string
    {
        return $this->surname;
    }

    public function setSurname(string $surname): static
    {
        $this->surname = $surname;

        return $this;
    }

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(string $position): static
    {
        $this->position = $position;

        return $this;
    }

    public function getUnit1(): ?string
    {
        return $this->unit_1;
    }

    public function setUnit1(string $unit_1): static
    {
        $this->unit_1 = $unit_1;

        return $this;
    }

    public function getUnit2(): ?string
    {
        return $this->unit_2;
    }

    public function setUnit2(string $unit_2): static
    {
        $this->unit_2 = $unit_2;

        return $this;
    }

    public function getAddress1(): ?string
    {
        return $this->address_1;
    }

    public function setAddress1(string $address_1): static
    {
        $this->address_1 = $address_1;

        return $this;
    }

    public function getAddress2(): ?string
    {
        return $this->address_2;
    }

    public function setAddress2(string $address_2): static
    {
        $this->address_2 = $address_2;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }
}
